/* eslint-disable no-unused-vars */
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users',{
    state: ()=>{
        return {
            currentUserLoggedIn: '',
            users:[
                {
                    name: '',
                    email: '',
                    age: 0,
                    weight: 0,
                }
            ]
        }
    },
    getters: {
        getCurrentUserLoggedIn(state) {
          return state.currentUserLoggedIn
        }
    },
    actions: {
        setCurrentUserLoggedIn(userName){
            this.currentUserLoggedIn = userName
            return this.currentUserLoggedIn;
        }
    }
})