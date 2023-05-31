<template>
    <div class="form-container">
        <div class="form-group">
            <label for="email">email</label>
            <input type="text" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="email">password</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button @click.prevent="submit">Login</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'loginComp',
        data(){
            return({
                email: '',
                password: '',
            })
        },
        methods:{
            async submit(){
                await axios.post('login', {
                    email: this.email,
                    password: this.password,
                })
            }
        }
    }
</script>

<style scoped>
.form-group{
    display: flex;
    flex-direction: column;
}
</style>