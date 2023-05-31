<template>
    <div class="full-width inline space-between align-center">
        <router-link to="/">
            <img src="../assets/chatGP-logo.png" alt="our logo">
        </router-link>
<<<<<<< HEAD:src/components/navigationComp.vue
        <div class="auth inline">
            <router-link to="/login">
                <p>Sign In</p>
            </router-link>
            <router-link to="/registration">
                <p>Sign Up</p>
            </router-link>
            {{ currentUser }}
=======
        <div class="login">
            <router-link to="/login">
                <span>Login</span>
            </router-link>
            <router-link to="/register">
                <span>Sign up</span>
            </router-link>
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/components/navigationComp.vue
        </div>
    </div>
</template>

<script>

    export default {
        inheritAttrs: false,
        name: 'navigationComp',
        props: ['currentUser'],
        data(){
            return({
                currentUser: null
            })
        }
    }
</script>

<style scoped>
.full-width{
    width: 100vw;
    padding: 0 5%;
    background: rgba(234, 231, 231, 1);
    color: white;
    height: 8vh;
}
a{
<<<<<<< HEAD:src/components/navigationComp.vue
    color: black;
=======
    color: rgb(68, 64, 64);
>>>>>>> 1c9d1b10ae5a185bcc4ef37ec4fdd0e123647314:frontend/src/components/navigationComp.vue
    text-decoration: none;
    margin-right: 2ch;
}
img{
    max-height: 8vh;
}
a:hover{
    opacity: 0.9;
    text-decoration: underline;
    text-underline-offset: 0.2ch;
}
.inline{
    display: flex;
}
.space-between{
    justify-content: space-between;
}
.align-center{
    align-items: center;
}
</style>