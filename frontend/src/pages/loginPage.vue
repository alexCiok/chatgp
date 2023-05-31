<template>
    <div class="center">
        <loginComp/>
    </div>
</template>

<script>
import loginComp from '../components/loginComp.vue'
    export default {
        name: 'loginPage',
        components: {
            loginComp,
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
</style>