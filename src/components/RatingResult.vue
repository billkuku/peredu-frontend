<template>
    12
    {{currentProject}}
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    props:['currentProject'],
    data(){
        return {
            id:this.$route.params.id,
            ratings:[]
        }
    },
    mounted(){
        axios({
            method: "get",
            url: '/api/project/ratings/'+this.id,
        }).then(response => {
            this.ratings=response.data
            })
    }
})
</script>
