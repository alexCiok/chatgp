<template>
    <div>
        <button @click="customLogin">
            Test me!
        </button>
    </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    export default {
        name:'manualLogin',
        data(){
            return({
                provider: null,
                auth: null,
            })
        },
        mounted() {
            this.provider = new GoogleAuthProvider();
            this.auth = getAuth();
            
        },
        methods:{
           customLogin(){
            signInWithPopup(this.auth, this.provider)
            .then( (res) =>{
                // This gives you a Google Access Token. You can use it to access the Google API.
                const cred = GoogleAuthProvider.credentialFromResult(res);
                const token = cred.accessToken;
                const user = res.user;
                console.log(token, user)
            })
            .catch( (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
            })
           }
        }
    }
</script>

<style scoped>

</style>