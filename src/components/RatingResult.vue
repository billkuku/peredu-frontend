<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 border mt-3">
                Average Rating:
                <star-rating
                    increment="0.1"
                    star-size=35
                    rating=1
                    show-rating=false
                    read-only=true>
                </star-rating>
            </div>
            <div class="col-sm-8">
                <h4 class="text-end">{{projectName}}</h4>
                <div class="w-100 border" v-for="(rating, index) in ratings" :key="index">
                    <div>Total rating:</div>
                    <div>
                        <star-rating
                            increment="0.1"
                            star-size=15
                            v-model:rating="rating.totalRating"
                            show-rating=false
                            read-only=true>
                        </star-rating>
                    </div>
                    <div v-for="(rate, index) in rating.rating" :key="index">
                        {{rate.criteria}}
                        {{rate.discription}}
                    </div>
                </div>
            </div>
        </div>
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
