import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from '../src/pages/LandingPage'
import personalPage from '../src/pages/personalPage'
import testPage from '../src/pages/testPage'
import resultsPage from '../src/pages/resultsPage'
import contactPage from '../src/pages/contactPage'
const paths = [
    {path: '/', component: LandingPage},
    {path: '/personal', component: personalPage},
    {path: '/test', component: testPage},
    {path: '/results', component: resultsPage},
    {path: '/contactMD', component: contactPage}
]

const router = createRouter(
    {
        routes: paths,
        history: createWebHistory()
    }
)

createApp(App).use(router).mount('#app')
