<template>
<<<<<<< HEAD:src/pages/registerPage.vue
    <navigationComp
    :currentUser="currentUser"></navigationComp>
        <section class="center half-width">
            <form 
            class="flex-col center full-width" 
            action=""
            @submit.prevent="handleRegister(email,password)"
            >
                <label 
                id="text-left" 
                for="email">
                    Email</label>
                <input 
                type="text" 
                v-model="email" id="email">
                <label 
                for="password">
                    Password</label>
                <input 
                type="password" 
                v-model="password">
                <label 
                for="password">
                    Confirm Password</label>
                <input 
                type="password" 
                v-model="confirmPassword">
                <div class="button-wrapper">
                    <button class="" type="submit">register</button>
                </div>
            </form>
        </section>
</template>

<script>
import navigationComp from '@/components/navigationComp.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
let currentUser = null;
    export default {
        components:{
        navigationComp
        },
        data(){
            return{
                email:"",
                password:"",
                confirmPassword:""
            }
        },
        methods:{
             async handleRegister(email, password){
                console.log(email, password)
                try{
                    const response = await createUserWithEmailAndPassword(auth, email, password)
                    if(response){
                        console.log("this is the response", response);
                        this.$router.push("/");
                        currentUser = auth.currentUser;
                        console.log(currentUser)
                    }
                    else{
                        console.log("error")
                    }
                }
                catch (err){
                    alert(err)
                }
            }
        },

=======
    <div v-if="registered">
        <thankYou/>
    </div>
    <div v-else class="center">
        <h1>Sign Up</h1>  
        <div class="registration-box">            
            <label for="firstN">First Name</label>
            <div class="form-group">
                <input type="text"
                    name="firstname"
                    id="firstN"
                    v-model="first_name"
                    placeholder="first name">
            </div>
            <label for="lastN">Last Name</label>
            <div class="form-group">
                <input type="text"
                    name="lastN"
                    id="lastN"
                    v-model="last_name"
                    placeholder="last name">
            </div>
            <label for="lastN">Email</label>
            <div class="form-group">
                <input type="text"
                    name="email"
                    id="email"
                    v-model="email"
                    placeholder="e-mail">
            </div>
            <label for="lastN">Password</label>
            <div class="form-group">
                <input type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    placeholder="password">
            </div>
            <div class="form-group">
                <input type="password"
                    name="repeatPwd"
                    id="repeatPwd"
                    v-model="confirm_password"
                    placeholder="confirm password">
            </div>
            <div class="form-group">
                <button @click="register">Register</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import thankYou from '../components/thankYou.vue'
    export default {
        name: 'registerPage',
        components: {
            thankYou
        },
        data() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                registered: false,
            }
        },
        methods:{
            register(){
                this.registered = !this.registered
                const user = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email,
                    password: this.password,
                    confirm_password: this.confirm_password
                }
                axios.post('http://localhost:3000/register', user)
                .then( response => {
                    console.log(response)
                }
                ).catch (error =>{
                    console.log(error)
                })
            }
        }
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/pages/registerPage.vue
    }
</script>

<style scoped>
<<<<<<< HEAD:src/pages/registerPage.vue
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
    background-color: white;
}
button:hover{
    opacity: 0.85;
}
.button-wrapper{
    margin: 2ch 0;
} 
#firebaseui-auth-container{
    max-height: 100%;
}
=======
.registration-box{
    display: flex;
    flex-direction: column;
    background-color: rgb(221, 221, 221);
    width: 20%;
    margin: 0 auto;
    height: 100%;
    padding: 2ch 0;
}
.center{
    display: flex;
    flex-direction: column;

}
h1{
    font-size: 2.5rem;
    margin: 2.5% 0;
}
label{
    font-size: 1.25rem;
    margin-top: 1ch;
}
input{
    width: 75%;
    padding: 1ch 0.5ch;
    margin: 0 auto;
}
#repeatPwd{
    margin-top: 1ch;
}
button{
    background-color: #4fa7f5;
    color: white;
    border: none;
    padding: .75ch 1.5ch;
    font-size: 1.5rem;
    margin: 2ch 0;
}
button:hover{
    cursor: pointer;
    opacity: 0.9
}

>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/pages/registerPage.vue
</style>