<template>
<<<<<<< HEAD:src/pages/loginPage.vue
    <navigationComp></navigationComp>
    <div id="firebaseui-auth-container">
        <section class="center half-width">
            <form 
            class="flex-col center full-width" 
            action=""
            @submit.prevent=""
            >
                <label id="text-left" for="email">Email</label>
                <input type="text" :v-model="email" id="email">
                <label for="password">Password</label>
                <input type="password" :v-model="password">
                <div class="button-wrapper">
                    <button class="" type="submit">Login</button>
                </div>
            </form>
            <h2>OR</h2>
        </section>
=======
    <div class="center">
        <loginComp/>
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/pages/loginPage.vue
    </div>
</template>

<script>
<<<<<<< HEAD:src/pages/loginPage.vue
import navigationComp from '@/components/navigationComp.vue';
// import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// FirebaseUI config.
var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        tosUrl: '/',
        // Privacy policy url/callback.
        privacyPolicyUrl: function() {
          window.location.assign('');
        }
      };

      var ui = new firebaseui.auth.AuthUI(firebase.auth()); 
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);

    export default {
       components:{
        navigationComp
       }
    }    
</script>

<style scoped>
.flex-col{
    display: flex;
    flex-direction: column;
}
.half-width{
    width: 50%;
}
.full-width{
    width: 100%;
}
.center{
    align-items: center;
    justify-content: center;
    width: 100%;
}
input{
    width: 25ch;
}
label{
    text-align: left;
}
#text-left{
    justify-self: left;
}
button:hover{
    cursor: pointer;
}
button{
    width: 25ch;
    text-transform: capitalize;
    padding: 1.5ch 0ch;
    border-radius: 12ch;
    border:none;
    color: white;   
    background-color: rgb(47, 47, 47);
}
button:hover{
    opacity: 0.85;
}
.button-wrapper{
    margin: 2ch 0;
} 
#firebaseui-auth-container{
    max-height: 100%;
=======
import loginComp from '../components/loginComp.vue'
    export default {
        name: 'loginPage',
        components: {
            loginComp,
        }
    }
</script>

<style scoped>
.center{
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/pages/loginPage.vue
}
</style>