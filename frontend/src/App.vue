<template>
  <navigationComp/>
  <router-view
  @personalInfo="storePersonalInfo"
  @testDetails="chatGPT"
  @contactMD = "contactMD"
  :someNum="worry"
  :yolo="response"
  :mdPic="mdURL"
  ></router-view>
  <Loading 
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="fullPage"
  ></Loading>
</template>

<script>

import Loading from 'vue-loading-overlay';
import navigationComp from './components/navigationComp.vue'
import 'vue-loading-overlay/dist/css/index.css';
import { Configuration, OpenAIApi } from "openai"


export default {
  name: 'App',
  components: {
    Loading,
    navigationComp
  },
  data(){
    return({
      personalInfo: {},
      testDetails: {},
      response: '',
      isLoading: false,
      fullPage: true,
      mdURL: '',
      worry: '',
    })
  },
  methods:{
    storePersonalInfo(person){
      this.personalInfo = person
    },
    async contactMD(worryValue){
      const configuration = new Configuration({
          //insert PRIVATE API KEY//
          apiKey: process.env.API_KEY
      });
      const openai = new OpenAIApi(configuration);
      this.isLoading = true
      const response = await openai.createImage({
        prompt:`A doctor monkey in a white lab coat that is ${worryValue}% scared`,
        n:1,
        size:"512x512",
        response_format:'url'
      })
      setTimeout(() => {
            this.isLoading = false
            }, 1000);
      this.mdURL = response.data.data[0].url
      this.worry = worryValue
    },
    async chatGPT(test){
      this.testDetails = test
      const {age, weight, gender} = this.personalInfo;
      const {testName, value, units, customization} = this.testDetails;
      const {workout, risks, diet } = customization;

      const configuration = new Configuration({
          //insert PRIVATE API KEY//
          apiKey: process.env.API_KEY
      });
      const openai = new OpenAIApi(configuration);
      const promptBits = [
        `Please provide a response in a numbered list to the following queries: 1) Introduce yourself as ChatGP, a virtual physician-like service 2) Explain that if a ${testName} of ${value} ${units} in a ${weight} pound, ${age} year old ${gender} is low, normal, high. 3) Provide your Monkey Doctor concern rating of 1 to 10.`,
  
        `Based on these ranges, in one sentence state whether a ${testName} of ${value} ${units} is low, normal, or high?`,

        `4) In one sentence explain why normal ${testName} is important for health and what its function is in the body.`,

        `5) In one sentence explain the importance of a healthy diet for maintaining ${testName} levels.`,

        `6) Provide an example menu for one day including breakfast, lunch, dinner, snacks for maintaining healthy ${testName}.`,

        `7) In one sentence explain the positive impact of exercise on ${testName} levels.`,

        `8) Mention that the CDC recommends 150 minutes of moderately strenous exercise per week.`,

        `9) Create a workout plan that includes three 30 minute workouts and four 10 minute workouts including examples for each day of the week.`,
    ]
      let promptFinal = [];
      promptFinal.push(promptBits[0]);
      promptFinal.push(promptBits[1]);
      promptFinal.push(promptBits[2]);
      if(risks==true) promptFinal.push(promptBits[3]);
      if(diet==true) promptFinal.push(promptBits[4]);
      promptFinal.push(promptBits[5]);
      promptFinal.push(promptBits[6]);
      if(workout==true){
        promptFinal.push(promptBits[7]);
      }
      this.isLoading = true
      const completion = await openai.createCompletion({
          model:"text-davinci-003",
          prompt: promptFinal.join(' '),
          temperature:0, 
          top_p:0,
          frequency_penalty:0,
          presence_penalty:0,
          max_tokens:500
      })
      setTimeout(() => {
            this.isLoading = false
            }, 1000);
      this.$router.push('/results')
      this.response = completion.data.choices[0].text;
      console.log(this.response)
    }
  }
}
</script>

<style global>
*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-position: center;
  background-image: url('assets/Background-banana.jpg');
  height: 100vh;
}
</style>
