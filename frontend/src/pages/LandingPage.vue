<template>
    <div v-if="queryStarted">
        <queryComp
        @collectPersonal="collectPersonal"
        ></queryComp>
    </div>
    <div v-else>
        <welcomeComp
        @startQuery="startQuery()"
        ></welcomeComp>
    </div>
</template>

<script>
import welcomeComp from '@/components/welcomeComp.vue'    
import queryComp from '@/components/queryComp.vue'

export default {
        inheritAttrs: false,
        name: 'LandingPage',
        components: {
            welcomeComp,
            queryComp
        },
        data(){
            return({
                queryStarted: false,
                collectingPersonal: false,
                queryField: null,
            })
        },
        methods:{
            startQuery(){
                this.queryStarted= true
                console.log(this.queryStarted)
            },
            collectPersonal(queryField){
                this.queryField = queryField,
                this.collectingPersonal = true
            }
        }
    }
</script>

<style scoped>

</style>