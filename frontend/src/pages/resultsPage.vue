<template>
    <body>
        
    {{ responseSplit() }}
    <h1 class="intro">
        Hi, I'm ChatGP, a virtual physician-like service.
    </h1>
    <div class="responses">
        <div class="response">
            <input type="button" value="Background Information" @click="dropDown('BG')">
        </div>
        <div class="custom-container" v-if="dropDownBGActive">
            {{ bgInfo }}
        </div>
        <div class="response"> 
            <input type="button" value="Exercise Plan" @click="dropDown('Exercise')">
        </div>
        <div class="custom-container" v-if="dropDownExerciseActive">
            {{ exerciseInfo }}
        </div>
        <div class="response">
            <input type="button" value="Diet Plan" @click="dropDown('Diet')">
        </div>
        <div class="custom-container" v-if="dropDownDietActive">
            {{ dietInfo }}
        </div>
        <div class="response">
            <input type="button" value="Should I Worry?" @click="dropDown('Worry')">
        </div>
        <div class="custom-container" v-if="dropDownWorryActive">
            {{ worryInfo }}
        </div>
        <button class="contactMD" @click="contactMD(worryValue)"><h2>Contact MD</h2></button>
    </div>
</body>

</template>
<script>
    export default {
        inheritAttrs: false,
        name: 'resultsPage',
        components:{
        },
        emits:['contactMD'],
        props:['yolo'],
        data(){
            return({
                dropDownBGActive: false,
                dropDownDietActive: false,
                dropDownExerciseActive: false,
                dropDownWorryActive: false,
                response: "",
                responseArr: [],
            })
        },
        updated(){
            this.response = this.yolo
        },
       computed:{
        introMD(){
            if(this.responseArr.length>=1)
                return this.responseArr[0];
            return '';
        },
        bgInfo(){
            if(this.responseArr.length>=1)
                return this.responseArr[1] + this.responseArr[3];
            return '';
            },
        exerciseInfo(){
            if(this.responseArr.length>=1)
                return this.responseArr[6] + this.responseArr[8]; 
            return '';
        },
        dietInfo(){
            if(this.responseArr.length>=1)
                return this.responseArr[4] + this.responseArr[5]; 
            return '';
        },
        worryInfo(){

            if(this.responseArr.length>=1)
            {
                let temp = this.responseArr[2];
                let glue = temp.split('Monkey Doctor').join(' ');
                return glue; 
            }
            return '';
        },
        worryValue(){
            if(this.responseArr.length>=1)
            {
                let temp = this.responseArr[2]
                let idx = temp.indexOf('out of 10') 
                if(idx == -1){
                    idx = temp.search(/\d/);
                    return temp.substring(idx, idx+2)
                }
                return temp.substring(idx-2, idx);
            }
            return ''
        }
       },
       methods:{
        dropDown(box){
                const field = "dropDown"+box+"Active"
                console.log(this[field])
                this[field] = !this[field];
        },
        responseSplit(){
            let temp = this.response.split(/[!?)]/g);
            temp.shift();
            this.responseArr = temp.map(s=> s.substring(0, s.length-2))
        },
        contactMD(worry){
            //dall-e takes the input and does magic(?)
            console.log(worry*10);
            this.$emit('contactMD', worry*10)
            this.$router.push('/contactMD')
        }
       },
    }
</script>

<style scoped>
.custom-container{
    text-align: left;
    width: 100%;
    max-width: 700px;
    background: rgb(252, 255, 255);
    margin: 0 auto;
    padding: 2ch 1ch;
    border: 0.125rem solid #000000;
    border-radius: 20px;
}
body{   
    background-image: url('../assets/Background-banana.jpg');
}
.contactMD{
    border: none;
    padding: 2ch 2.5ch;
    background:#336998;
    color: white;
    font-size: 1.125rem;
    margin-top: 2ch;
    font-size: 900;
}
input{
    padding: 1.5ch 0;
    background: #4fa7f5;
    font-size: 1.5rem;
    color: white;
    border:none;
    border-bottom: 2px solid white;
    border-bottom-width: 50%;
    width: 100%;
}
input:hover{
    cursor: pointer;
}
.drop-btn{
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 900;
    margin-right: 1ch;
    border: 1px solid #4fa7f5;
    padding: 0 0.5ch;
    border-radius: 7px;
    color: #4fa7f5;
}
.contactMD:hover{
    opacity: 0.9;
    cursor:pointer;
}
.response{
    padding: 2ch 0;
}
.response:hover{
    opacity: 0.9;
}
.responses{
    height: 100%;
    width: 60%;
    background-color: #ffffff;
    text-align: left;
    padding: 2rem 5%;
    margin: 0 auto;
    margin-bottom: 50%;
    border: 3px solid black;
}
.intro{
    font-size: 2.5rem;
    margin-top: 5%;

}
.drop-btn:hover{
    color: white;
    background: #4fa7f5;
}
</style>