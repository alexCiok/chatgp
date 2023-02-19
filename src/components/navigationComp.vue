<template>
    <div class="full-width inline  align-center">
        <router-link to="/">
            <img src="../assets/chatGP-logo.png" alt="our logo">
        </router-link>
        <!-- <div class="login">
            <router-link to="/">
                <span>Login</span>
            </router-link>
            <router-link to="/">
                <span>Sign up</span>
            </router-link>
        </div> -->
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        name: 'navigationComp'
    }
</script>

<style scoped>
.full-width{
    width: 100vw;
    padding: 0 10%;
    background: rgba(234, 231, 231, 1);
    color: white;
    height: 8vh;
}
a{
    color: white;
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