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

//initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
