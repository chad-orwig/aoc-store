import React from 'react';
import { func } from 'prop-types';

import firebase from './firebaseConfig';
import 'firebase/auth';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const gitHubProvider = new firebase.auth.GithubAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
gitHubProvider.addScope('read:user');

function loginFailureHandler(addAlert) {
    return (loginError) => {
        console.error(loginError);
        addAlert({
            heading: 'Login Error',
            message: loginError.message ?? 'No details given, check the console and talk to Chad.',
            variant: 'danger'
        });
    }
}

function login(provider) {
    return firebase.auth().signInWithPopup(provider)
}

function loginWithGoogle(addAlert) {
    return () => login(googleProvider).catch(loginFailureHandler(addAlert));
}
function loginWithGithub(addAlert) {
    return () => login(gitHubProvider).then((loginResult) => {
        if(!loginResult) return;

        const {user, additionalUserInfo} = loginResult;
        const displayName = user.displayName 
            || additionalUserInfo.profile.name
            || additionalUserInfo.profile.username;

        if(displayName && displayName !== user.displayName) {
            user.updateProfile({ displayName }).then(() => firebase.auth().updateCurrentUser())
        }
    })
    .catch(loginFailureHandler(addAlert));
}
function loginWithTwitter(addAlert) {
    return () => login(twitterProvider)
        .then(result => {
            console.log(result);
        })
        .catch(loginFailureHandler(addAlert));
}

function LoginPanel({ addAlert }) {

    return (
        <div className="float-right">
            <span className="d-inline-block lead align-middle mr-2">Login With</span>
            <ButtonGroup>
                <Button onClick={loginWithGoogle(addAlert)}>Google</Button>
                <Button onClick={loginWithGithub(addAlert)}>GitHub</Button>
                <Button onClick={loginWithTwitter(addAlert)}>Twitter</Button>
            </ButtonGroup>
        </div>
    );
}

LoginPanel.propTypes = {
    addAlert : func.isRequired
};

export default LoginPanel;