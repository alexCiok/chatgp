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
    }
})