import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '../src/pages/LandingPage'
import personalPage from '../src/pages/personalPage'
import testPage from '../src/pages/testPage'
import resultsPage from '../src/pages/resultsPage'
import contactPage from '../src/pages/contactPage'
import loginPage from '../src/pages/loginPage'
import registerPage from '../src/pages/registerPage'
import { firebaseConfig } from './pages/firebaseConfig'


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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: 'AIzaSyAZFFmV0_-vTbVnPbDWtk08_PInS_mzoZM',
//   authDomain: "chatgp-7ab92.firebaseapp.com",
//   projectId: "chatgp-7ab92",
//   storageBucket: "chatgp-7ab92.appspot.com",
//   messagingSenderId: "445057067830",
//   appId: "1:445057067830:web:ee11da35f21bbf4a216197",
//   measurementId: "G-LVQQGEXZTX"
// };
// // Initialize Firebase
initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
