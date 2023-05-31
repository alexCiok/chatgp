<template>
    <div class="main">
        <h1>Personal Details</h1>
        <div v-if="errors.length">
            <b>Please correct the following:</b>
            <li v-for="error in errors" :key="error">
                {{ error }}
            </li>
        </div>
        <form action="" class="flex-col">
            <span class="flex-col">
                <h3>Date of Birth</h3>
                <input type="date" id="age" required placeholder="2000-01-01" min="1900-01-01" max="2006-12-31" v-model="dob"> 
            </span>
            <span class="flex-col">
                <h3>Weight (lbs)</h3>
                <div class="weight flex">
                    <input type="number" id="weight" required v-model="weight">
                </div>
            </span>
            <h3>Gender</h3>
            <span class="grid">
                <div class="col-2">
                    <input type="radio" name="gender" id="male" value="male" v-model="gender" required>
                    <label for="male">Male</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="gender" id="female" value="female" v-model="gender" required>
                    <label for="female">Female</label>
                    </div>
                <div class="col-2">
                    <input type="radio" name="gender" id="nonbinary" value="nonbinary" v-model="gender" required>
                    <label for="nonbinary">Nonbinary</label>
                </div>
            </span>

            <div class="space-evenly">
            </div>
            <button @click="whatTest">Continue</button>
        </form>
    </div>
</template>

<script>

export default {
        inheritAttrs: false,
        name: 'personalPage',
        components: {
        },
        emits:['personalInfo'],
        data(){
            return({
                gender: null,
                weight: null,
                errors: [],
                dob: null,
            })
        },
        methods:{
            whatTest(){
                this.errors=[];
                if(!this.dob){
                    this.errors.push('Please input a valid date of birth.')
                }
                if(this.weight<0){
                    this.errors.push('Please use a valid weight.')
                }
                if(!this.gender){
                    this.errors.push('Please select your gender.')
                }
                else{
                    const birth = new Date(this.dob);
                    const month_diff = Date.now() - birth.getTime();
                    const ages = Math.floor(month_diff/1000/60/60/24/365);
                    this.$emit('personalInfo',{
                        age: Math.floor(ages),
                        dob: this.dob, 
                        weight: this.weight,
                        gender: this.gender
                    })
                    this.$router.push("/test")
                }
            }
        }
    }
</script>

<style scoped>
*, *::after, *::before{
    margin: 0;
    padding: 0;
}
.flex-col{
    display: flex;
    flex-direction: column;
}
h1{
    padding-top: 5%;
    padding-bottom: 5%;
}
.col-2{
    display: grid;
    align-self: start;
    grid-template-columns: 1fr 10fr;
    text-align: left;
}
h3{
    text-align: left;
}
.flex{
    display: flex;
}
input{
    text-align: center;
    margin: 0 auto;
    padding: 1ch 0;
    width: 100%;
    border: 2px solid grey;

}
input[type='radio']{
    margin-bottom: 1.5ch;
}
#gender, #weight, #age{
    margin-top: 1ch;
}
#age, #weight{
    margin-bottom: 2ch;
}
.main{
    width: 60%;
    height: 80%;
    padding: 5% 10%;
    margin: 0 auto;
}
.space-evenly{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
button{
    width: 50%;
    margin: 5% auto;
    background: black;
    color: white;
    padding: 1ch 0;
    border: none;
    border-radius: 15px;
    font-size: 1.15rem
}
button:hover{
    cursor: pointer;
    opacity: 0.85;
}
</style>