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

function login(provider) {
    return firebase.auth().signInWithRedirect(provider)
}

function loginWithGoogle(addAlert) {
    return () => login(googleProvider);
}
function loginWithGithub(addAlert) {
    return () => login(gitHubProvider);
}
function loginWithTwitter(addAlert) {
    return () => login(twitterProvider)
        .then(result => {
            console.log(result);
        });
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