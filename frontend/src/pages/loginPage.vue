<template>
    <div class="center registration-box">
        <loginComp @emitLogin="login"/>
        <manualLogin/>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"

import loginComp from '../components/loginComp.vue'
import manualLogin from "@/components/manualLogin.vue"
    export default {
        name: 'loginPage',
        components: {
            loginComp,
            manualLogin
        },
        data(){
            return({
                email:'',
                password:''
            })
        },
        methods:{
            async login({email, password}){
                const auth = getAuth();
                console.log(email)
                await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("currentUser = ", auth.currentUser);
                    console.log("userCredential = ", userCredential);
                    this.$router.push("/")
                })
                .catch(err=>{
                    alert(err.message);
                })
                
            }
        }
    }
</script>

<style scoped>
.center{
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.registration-box{
    display: flex;
    flex-direction: column;
    background-color: rgb(221, 221, 221);
    width: 20%;
    min-width: 30ch;
    margin: 10% auto;
    padding: 2ch 0;
}

</style>