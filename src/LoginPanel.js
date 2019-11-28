import React from 'react';
import { func } from 'prop-types';

import firebase from './firebaseConfig';
import 'firebase/auth';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const gitHubProvider = new firebase.auth.GithubAuthProvider();
gitHubProvider.addScope('read:user');

function login(provider) {
    return firebase.auth().signInWithPopup(provider);
}

function loginWithGoogle() {
    login(googleProvider);
}
function loginWithGithub() {
    login(gitHubProvider).then(({user, additionalUserInfo}) => {
        const displayName = user.displayName 
            || additionalUserInfo.profile.name
            || additionalUserInfo.profile.username;

        if(displayName && displayName !== user.displayName) {
            user.updateProfile({ displayName }).then(() => firebase.auth().updateCurrentUser())
        }
    })
}

function LoginPanel({ setUser }) {

    return (
        <div className="float-right">
            <span className="d-inline-block lead align-middle mr-2">Login With</span>
            <ButtonGroup>
                <Button onClick={loginWithGoogle}>Google</Button>
                <Button onClick={loginWithGithub}>GitHub</Button>
            </ButtonGroup>
        </div>
    );
}

LoginPanel.propTypes = {
    setUser : func
};

export default LoginPanel;