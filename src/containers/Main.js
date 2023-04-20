import React from "react";
import {
    Routes, Route, Redirect,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    const MessageFormWithAuth = withAuth(MessageForm);
    // console.log("main user: " + currentUser + " id: " + Object.keys(currentUser));
    return (
        <div className="z-0">
            <Routes>
                <Route exact path="/" element={<Homepage currentUser={currentUser} {...props} />} />
                <Route exact path="/signin" element={
                    <AuthForm
                        errors={errors}
                        removeError={removeError}
                        onAuth={authUser}
                        buttonText="log in"
                        heading="welcome back"
                        {...props} //?
                    />
                } />
                <Route exact path="/signup" element={
                    <AuthForm
                        errors={errors}
                        removeError={removeError}
                        onAuth={authUser}
                        signUp
                        buttonText="sign up"
                        heading="welcome"
                        {...props}
                    />
                } />
                <Route
                    exact path="users/:id/messages/new"
                    element={<MessageFormWithAuth {...props} />}
                />
            </Routes>
        </div >
    )
}

function mapStateToProps(state) {
    console.log("current user :): " + state.currentUser.user);
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));