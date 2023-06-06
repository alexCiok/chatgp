<template>
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
            <fireBaseUI class="google"/>
        </div>
    </div>

</template>

<script>
import thankYou from '../components/thankYou.vue'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import fireBaseUI from '../components/fireBaseUI.vue'

export default {
        name: 'registerPage',
        components: {
            thankYou,
            fireBaseUI
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
        mounted() {
        },
        methods:{
            async register(){
                    const auth= getAuth()
                    await createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((res)=>{
                        console.log(res)
                        alert('Registration successful')
                        this.$router.push("/")
                        this.registered = !this.registered
                    })
                    .catch(err=>{
                        //add switch for different error codes (e.g. "weak password", "email taken")
                        alert(err.code)
                        console.log(err);
                    })
                }
        }
    }
</script>

<style scoped>
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

</style>