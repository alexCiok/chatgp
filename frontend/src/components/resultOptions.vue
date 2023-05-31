<template>
<form class="flex-row" action="">
    <span>
        <input type="checkbox" name="" id="risks" checked v-model="risks">
        <label for="risks">Risks</label>
    </span>
    <span>
        <input type="checkbox" name="" id="worry" checked v-model="worry">
        <label for="worry">How Worried Should I Be?</label>
    </span>
    <span>
        <input type="checkbox" name="" id="monkey" checked v-model="monkey">
        <label for="monkey">Show Monkey</label>
    </span>
    <span>
        <input type="checkbox" name="" id="diet" checked v-model="diet">
        <label for="diet">Diet Advice</label>
    </span>
    <span>
        <input type="checkbox" name="" id="workout" checked v-model="workout">
        <label for="workout">Individualized Workout Regime</label>
    </span>
</form>
</template>

<script>
    export default {
        inheritAttrs: false,
        name: 'resultOptions'
    }
</script>

<style scoped>
h1{
    margin-top: 7%;
    margin-bottom: 3%;
}
h2{
    padding-top: 2ch;
    padding-bottom: 1ch;
}
.drophead{
    color:#4fa7f5;
    font-weight: 400;
}
select{
    border: 2px solid black;
    padding: 2ch 2ch;
    border-radius: 15px;
}
input{
    border: 2px solid black;
    padding: 2ch 2ch;
    border-radius: 15px;
    margin: 0 2ch;
}
.analyze{
    margin: 2ch 0;
    padding: 1ch 6ch;
    font-size: 2rem;
    border-radius: 7px;
    border: none;
    background-color: #4fa7f5;
    color: white;
}
button:hover{
    opacity:0.9;
    cursor: pointer;
}
.custom-container{
    text-align: left;
    width: 100%;
    max-width: 500px;
    background: rgb(252, 255, 255);
    margin: 0 auto;
    padding: 2ch 1ch;
    border: 0.125rem solid #4fa7f5;
    border-radius: 20px;
}
.drop-btn{
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 900;
    margin-right: 1ch;
    border: 1px solid #4fa7f5;
    padding: 0 0.5ch;
    border-radius: 50%;
    color: #4fa7f5;
}
.drop-btn:hover{
    color: white;
    background: #4fa7f5;
}
.flex-row{
    display: flex;
    flex-direction: column;
}
</style>