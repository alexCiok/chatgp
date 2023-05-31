<template>
    <navigationComp/>
    <span class="mdPic" v-if="mdPic">
        <img :src=mdPic alt="">
        <div>
            <h2>As your MD <i>(Monkey Doctor)</i>, I'm <h1 :class="{ concern: someNum>80 }">{{ someNum }}%</h1>
                 worried about you <span v-if="someNum>80">!!!</span></h2>
            <p><i>Please consult all results with a human doctor</i></p>
        </div>
    </span>
    
</template>

<script>
import navigationComp from '@/components/navigationComp.vue';
    export default {
        name: 'contactPage',
        components:{
            navigationComp
        },
        data(){
            return({
            })
        },
        props:["someNum", "mdPic"],
    }
</script>

<style scoped>
p{
    padding-top: 2ch;
}
.concern{
    color: red;
}
.mdPic{
    padding-top: 15%;
}
</style>