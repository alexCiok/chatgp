<template>
    <h1>Help Me Understand</h1>
    <form action="">
        <select name="test" id="test" v-model="testDone">
            <option value="" disabled="true">Select Option</option>
            <option value="cholesterol">Cholesterol</option>
            <option value="Magnesium">Magnesium</option>
            <option value="Calcium">Calcium</option>
            <option value="T4">T4</option>
            <option value="pH">pH</option>
            <option value="Lactate">Lactate</option>
        </select>
            <input type="number" name="testValue" id="testValue" placeholder="" v-model="testVal">
        <select name="units" id="units" v-model="testUnits"> 
            <option value="" disabled="true">Select Option</option>
            <option value="mmHg">mmHg</option>
            <option value="mmol/L">mmol/L</option>
            <option value="g/L">g/L</option>
            <option value="µmol/L">µmol/L</option>
            <option value="nmol/L">nmol/L</option>
            <option value="pmol/L">pmol/L</option>
            <option value="%">%</option>
            <option value="pg">pg</option>
        </select>
    </form>
    <div>
        <h2 class="drophead"><button class="drop-btn" @click="dropDown()">+</button> Customize Results</h2>
    </div>
    <div class="custom-container" v-if="dropDownActive">
        <resultOptions></resultOptions>
    </div>
    <button class="analyze" @click="testDetails">Analyze</button>
</template>

<script>
import resultOptions from '@/components/resultOptions.vue';


export default {
    name: "testPage",
    emits:['testDetails'],
    
    data() {
        return ({
            testDone: null,
            testVal: null,
            testUnits: null,
            dropDownActive: false,
            workout: true,
            monkey: true,
            worry: true,
            risks: true,
            diet: true,
            isLoading: false,
            fullPage: true,
        });
    },
    components: {
    resultOptions,
},
    methods:{
        testDetails(){
            this.$emit('testDetails', {
                testName: this.testDone,
                value: this.testVal,
                units: this.testUnits,
                customization: {
                    workout: this.workout,
                    monkey: this.monkey,
                    worry: this.worry,
                    risks: this.risks,
                    diet: this.diet
                }
            })
        },
        dropDown(smt){
            console.log(smt)
            this.dropDownActive=!this.dropDownActive
        }
    }   
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