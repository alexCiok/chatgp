import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '../src/pages/LandingPage'
import personalPage from '../src/pages/personalPage'
import testPage from '../src/pages/testPage'
import resultsPage from '../src/pages/resultsPage'
import contactPage from '../src/pages/contactPage'
<<<<<<< HEAD:src/main.js
import registerPage from '../src/pages/registerPage'
import loginPage from '../src/pages/loginPage'

import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAZFFmV0_-vTbVnPbDWtk08_PInS_mzoZM",
    authDomain: "chatgp-7ab92.firebaseapp.com",
    projectId: "chatgp-7ab92",
    storageBucket: "chatgp-7ab92.appspot.com",
    messagingSenderId: "445057067830",
    appId: "1:445057067830:web:ee11da35f21bbf4a216197",
    measurementId: "G-LVQQGEXZTX"
  };

=======
import loginPage from '../src/pages/loginPage'
import registerPage from '../src/pages/registerPage'
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/main.js
const paths = [
    {path: '/', component: LandingPage},
    {path: '/registration', component: registerPage},
    {path: '/login', component: loginPage},
    {path: '/personal', component: personalPage},
    {path: '/test', component: testPage},
    {path: '/results', component: resultsPage},
    {path: '/contactMD', component: contactPage},
    {path: '/login', component: loginPage},
    {path: '/register', component: registerPage}
]

const router = createRouter(
    {
        routes: paths,
        history: createWebHistory()
    }
)

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
