///<reference path="../node_modules/@types/gapi/index.d.ts"/>

function onGoogleUserSignIn(googleUser: any): void {
    const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Token: ' + id_token);
}

function googleUserSignOut(): void {
    const auth2 = (gapi as any).auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}
