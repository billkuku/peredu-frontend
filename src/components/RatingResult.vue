<template>
    {{projectName}}
    {{ratings}}
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    props:['currentProject'],
    data(){
        return {
            id:this.$route.params.id,
            ratings:[],
            projectName: this.$route.params.projectname
        }
    },
    mounted(){
        axios({
            method: "get",
            url: '/api/experiences/ratings/'+this.id,
        }).then(response => {
            this.ratings=response.data
            })
    }
})
</script>
