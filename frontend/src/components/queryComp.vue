<template>
    <div class="main">
        <div class="headers">
            <h1>How Can I Help?</h1>
            <h2>I'm looking for help understanding my...</h2>
        </div>
        <form action="" class="flex-col mid">
            <router-link to="personal">
                <input type="button" class="labs" value="Lab Results" @click="collectPersonal('labRes')">
            </router-link>
                <input type="button" class="coming-soon" value="Medication (Coming Soon)" >
                <input type="button" class="coming-soon" value="Exercise (Coming Soon)" >
                <input type="button" class="coming-soon" value="Dietary Restrictions (Coming Soon)">
        </form>
    </div>
</template>

<script>
    export default {
        inheritAttrs: false,
        name: 'queryComp',
        emits:['collectPersonal'],
        data(){
            return({
                labRes: false,
                medication: false,
                exercise: false,
                dietaryRes: false,
            })
        },
        methods:{
            collectPersonal(queryField){
                this.$emit('collectPersonal', queryField)
            }
        }
    }
</script>

<style scoped>
.headers{
    margin-top: 10%;
}
h1{
    margin-bottom: 15%;
}
h2{
    font-weight: 500;
    margin-bottom: 2ch;
}
input{
    padding: 1.5ch 0;
    background: #4fa7f5;
    color: white;
    border:none;
    border-bottom: 2px solid white;
    border-bottom-width: 50%;
    width: 100%;
}
.coming-soon{
    background: rgb(186, 182, 182);
    font-style: italic;
}
.labs:hover{
    opacity: 0.9;
    border-bottom: 2px solid black;
}
.flex-col{
    display: flex;
    flex-direction: column;
    text-align: left;
}
label{
    margin-left: 2ch;
    font-size: 1.25rem;
}
.mid{
    max-width: 400px;
    margin: 0 auto;
}
.main{
    width: 55%;
    margin: 0 auto;
}
</style>