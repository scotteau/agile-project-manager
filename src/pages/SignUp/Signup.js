import React from "react";
import "./SignUp.css";
import TextField from "../../components/TextField/TextField";
import {connect} from "react-redux";
import {create_account, init_user_requested, login_user, should_show_register} from "../../actions";
import myFirebase from "../../Firebase/firebase";
import {updateUserToServer} from "../../apis/api";

const SignUp = ({should_show_register, currentUser, create_account, init_user_requested, login_user}) => {
    const [pending, setPending] = React.useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const email = event.target["signup-email"].value;
        const password = event.target["signup-password"].value;
        setPending(true);

        if (currentUser.id) {
            myFirebase
                .doCreatePermanentAccountFromAnonymous(email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    console.log("Anonymous account successfully upgraded, ", user);

                    // update user's email
                    await updateUserToServer({...currentUser, email: email});

                    should_show_register(false);
                })
                .catch((error) => {
                    console.log("Error upgrading anonymous account, ", error);
                    setPending(false);
                });

        } else {
            should_show_register(false);
            init_user_requested();
            create_account({email, password});
            login_user({username: email, password: password});
        }
    }

    React.useEffect(() => {
        console.log(currentUser);
    }, [])

    return (
        <div className="App-SignUp">
            <section className="content">
                <header>
                    {/*<Breadcrumb />*/}
                    <span
                        onClick={() => {
                            should_show_register(false);
                        }}
                    >
            Back
          </span>
                </header>
                <h1>Create your account</h1>

                <form onSubmit={(event) => handleSubmit(event)}>
                    <TextField which={"email"}/>
                    <TextField which={"password"}/>
                    <button disabled={pending}>Register</button>
                </form>
            </section>
            <section className="color"/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user
    };
};

export default connect(mapStateToProps, {
    should_show_register,
    create_account,
    init_user_requested,
    login_user
})(SignUp);
