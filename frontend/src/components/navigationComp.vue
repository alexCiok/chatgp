<template>
    <div class="full-width inline space-between align-center">
        <router-link to="/">
            <img src="../assets/chatGP-logo.png" alt="our logo">
        </router-link>
        <div v-if="currentUser === undefined" class="login">
            {{ random }}
            <router-link to="/login">
                <span>Login</span>
            </router-link>
            <router-link to="/register">
                <span>Sign up</span>
            </router-link>
        </div>
        <div v-else>
            {{ console.log(currentUser) }}
            My Profile
        </div>
    </div>
</template>

<script>
    import { useUsersStore } from '../store';
    const users = useUsersStore();
    export default {
        inheritAttrs: false,
        name: 'navigationComp',
        props: ['currentUserProp'],
        data(){
            return({
                currentUser: users.currentUserLoggedIn,
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
    color: rgb(68, 64, 64);
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