<template>
    <div>
        <h4 class="text-end">{{projectName}}</h4>
        <li class="w-100 border" v-for="(ratings, index) in experiences" :key="index">
            rating: {{ratings.totalRating}}
            {{rating.rating[0]}}
        </li>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    props:['currentProject'],
    data(){
        return {
            id:this.$route.params.id,
            experiences:[],
            projectName: this.$route.params.projectname
        }
    },
    mounted(){
        axios({
            method: "get",
            url: '/api/experiences/ratings/'+this.id,
        }).then(response => {
            this.experiences=response.data
            })
    }
})
</script>
