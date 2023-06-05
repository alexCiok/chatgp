<template>
    <div class="form-container">
        <div class="form-group">
            <label for="email">username / email</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="email">password</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button @click.prevent="emitLogin">Login</button>
        <h1>OR</h1>
        <fireBaseUI/>
    </div>

</template>

<script>
import fireBaseUI from './fireBaseUI.vue';
    export default {
        name: 'loginComp',
        components:{
            fireBaseUI,
        },
        data(){
            return({
                email: '',
                password: '',
            })
        },
        emits:["emitLogin"],
        methods:{
            emitLogin(){
                this.$emit('emitLogin', {email: this.email, password: this.password})
            }
        }
    }
</script>

<style scoped>
.form-group{
    display: flex;
    flex-direction: column;
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

label{
    font-size: 1.25rem;
    margin-top: .5ch;
}
input{
    width: 75%;
    padding: .75ch 0.5ch;
    margin: 0 auto;
}
</style>