<template>
    <div id="firebaseui-auth-container">
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from '../firebaseConfig';
import "firebaseui/dist/firebaseui.css";
import { auth } from 'firebaseui'
    export default {
        name:'fireBaseUI',
        data(){
            return({
                ui: null
            })
        },
        beforeCreate() {
            firebase.initializeApp(firebaseConfig);
        },
        mounted() {
            var uiConfig = {
            signInSuccessUrl: '/',
            callbacks: {
                uiShown: ()=>{
                    alert("shown!")
                },
                signInFailure: function(error) {
                    if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
                        return Promise.resolve();
                    }
                    var cred = error.credential;
                    return firebase.auth().signInWithCredential(cred);
            }},
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                ],
                
            }
            this.ui = auth.AuthUI.getInstance() || new auth.AuthUI(firebase.auth());
            this.ui.start('#firebaseui-auth-container', uiConfig);
            },
    }
</script>

<style scoped>

</style>