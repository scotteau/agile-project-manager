import {
    PROJECT_STAR_ADDED,
    PROJECT_STAR_REMOVED,
    USER_LOGOUT,
    INIT_USER_SUCCESS,
    INIT_USER_FAILED,
    PROJECT_DELETED,
    WORKSPACE_CHANGED,
    UPDATE_USER, CREATE_NEW_SHARED_WORKSPACE, CREATE_ACCOUNT, USER_LOGIN_SUCCESS, GUEST_LOGIN_SUCCESS,
} from "../actions";
import {updateUserToServer} from "../apis/api";

const initialUserState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    privateProjects: [],
    avatar: "",
    colorIndex: 0,
    starredProjects: [],
    workspaces: [],
    isLoggedIn: false,
    allWorkspaces: {}
};

export const user = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS: {
            return {
                ...state,
                id: action.userId,
            };
        }
        case GUEST_LOGIN_SUCCESS: {
            return {
                ...state,
                id: action.userId,
            };
        }
        case INIT_USER_SUCCESS: {
            return {
                ...state,
                ...action.user,
                isLoggedIn: true,
            };
        }
        case INIT_USER_FAILED: {
            return {
                ...state,
                error: action.error,
            };
        }
        case USER_LOGOUT: {
            return {
                ...initialUserState,
            };
        }
        case PROJECT_STAR_ADDED: {
            return {
                ...state,
                starredProjects: [...state.starredProjects, action.project.id],
            };
        }

        case PROJECT_STAR_REMOVED: {
            return {
                ...state,
                starredProjects: state.starredProjects.filter(
                    (id) => id !== action.project.id
                ),
            };
        }

        case PROJECT_DELETED: {
            return {
                ...state,
                starredProjects: state.starredProjects.filter(
                    (id) => id !== action.project.id
                ),
                privateProjects: state.starredProjects.filter(
                    (id) => id !== action.project.id
                ),
            };
        }

        case WORKSPACE_CHANGED: {
            const index = state.workspaces.indexOf(action.workspace.id);
            const newWorkspaces = [...state.workspaces];

            newWorkspaces.splice(index, 1);
            newWorkspaces.splice(0, 0, action.workspace.id);

            // todo - possible error handling here
            updateUserToServer({id: state.id, workspaces: newWorkspaces});

            return {
                ...state,
                workspaces: [...newWorkspaces],
            };
        }

        case UPDATE_USER: {
            return {
                ...state,
                ...action.user
            }
        }

        case CREATE_NEW_SHARED_WORKSPACE: {
            return {
                ...state,
                workspaces: [...action.workspaces],
                allWorkspaces: {...action.allWorkspaces}
            }
        }

        case CREATE_ACCOUNT: {
            return {
                ...state,
                id: action.userId
            }
        }

        default:
            return {
                ...state,
            };
    }
};
