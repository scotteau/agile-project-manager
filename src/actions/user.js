import backend from "../apis/backend";
import myFirebase from "../Firebase/firebase";

export const INIT_USER_REQUESTED = "INIT_USER";
export const init_user_requested = () => {
    return {
        type: INIT_USER_REQUESTED,
    };
};
export const INIT_USER_SUCCESS = "INIT_USER_SUCCESS";
const init_user_success = (response) => {
    return {
        type: INIT_USER_SUCCESS,
        user: response.data.user || {},
        workspace: response.data.workspace || {},
        allProjects: response.data.allProjects || [],
    };
};
export const INIT_USER_FAILED = "INIT_USER_FAILED";
export const init_user_failed = (e) => {
    return {
        type: INIT_USER_FAILED,
        error: e,
    };
};
export const init_user = (userId) => async (dispatch) => {
    try {
        const response = await backend.get(`/users/${userId}`);
        dispatch(init_user_success(response));
    } catch (e) {
        dispatch(init_user_failed(e));
    }
};

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";

export const login_user = ({username, password}) => async (dispatch) => {
    try {
        const res = await myFirebase.doSignInWithEmailAndPassword(
            username,
            password
        );
        const userId = res.user.uid;
        dispatch({
            type: USER_LOGIN_SUCCESS,
            userId: userId,
        });
    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAILED,
            error: e
        })
        console.log(e);
    }
};

export const USER_LOGOUT = "USER_LOGOUT";
export const logout_user = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGOUT,
        });
        await myFirebase.doSignOut();
    } catch (e) {
        console.log(e);
    }
};

export const GUEST_LOGIN_SUCCESS = "GUEST_LOGIN_SUCCESS";
export const GUEST_LOGIN_FAILED = "GUEST_LOGIN_FAILED";
export const GUEST_LOGOUT = "GUEST_LOGOUT";
export const login_guest = () => async (dispatch) => {
    try {
        const res = await myFirebase.doSignInAnonymously();
        const userId = res.user.uid;

        await backend.post(`/initUser/${userId}`);

        dispatch({
            type: GUEST_LOGIN_SUCCESS,
            userId: userId,
        });
    } catch (e) {
        dispatch({
            type: GUEST_LOGIN_FAILED,
            error: e
        })
        console.log(e);
    }
};

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const create_account = ({email, password}) => async (dispatch) => {
    try {
        const res = await myFirebase.doCreateUserWithEmailAndPassword(email, password);
        const userId = res.user.uid;

        await backend.post(`/initUser/${userId}`);
        await backend.put(`/users/${userId}`, {
            email: email
        })

        dispatch({
            type: CREATE_ACCOUNT,
            userId: userId
        })

    } catch (e) {
        console.log(e);
    }
}

export const logout_guest = () => async (dispatch) => {
    try {
        dispatch({
            type: GUEST_LOGOUT,
        });
    } catch (e) {
        console.log(e);
    }
};

export const UPDATE_USER = "UPDATE_USER";
export const update_user = (user) => {
    return {
        type: UPDATE_USER,
        user,
    };
};
