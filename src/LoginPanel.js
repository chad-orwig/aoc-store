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
    firebase.auth().signInWithPopup(provider);
}

function loginWithGoogle() {
    login(googleProvider);
}
function loginWithGithub() {
    login(gitHubProvider);
}

function LoginPanel({ setUser }) {

    return (
        <ButtonGroup className="ml-4">
            <Button onClick={loginWithGoogle}>Google</Button>
            <Button onClick={loginWithGithub}>GitHub</Button>
        </ButtonGroup>
    );
}

LoginPanel.propTypes = {
    setUser : func
};

export default LoginPanel;