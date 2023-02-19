<template>
    <div class="center align full-height">
        <h1>Welcome to ChatGP</h1>
        <h2>Your Virtual General Practicioner</h2>
        <button class="start-btn" @click="startQuery">Get Started</button>
    </div>
</template>

<script>

    export default {
        inheritAttrs: false,
        name: 'welcomeComp',
        emits: ['startQuery'],
        methods:{
            startQuery(){
                this.$emit('startQuery', true)
            }
        }
    }
</script>

<style scoped>

.center{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.align{
    margin-top: 15%;
}
.full-height{
    height: 100%;
}
h1{
    font-size: 3.5rem;
}
h2{
    font-size: 1.5rem;
    margin-top: 2ch;
    font-weight: 300;
}
.start-btn{
    max-width: 400px;
    width: 50%;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 2ch 0ch;
    border: white;
    background: #4fa7f5;  
    color: white;
    font-weight: 600;
    font-size: 2rem;
}
button:hover{
    cursor: pointer;
    opacity: 0.9;
}
</style>