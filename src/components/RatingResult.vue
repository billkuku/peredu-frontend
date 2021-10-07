<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 mt-3">
                <div class="text-start align-item-center">
                    <h4 class="" style="font-family: Consolas">{{projectName}}</h4>
                    <h6 class="mt-5">Average Rating:</h6>
                    <div class="px-auto border">
                        <star-rating
                            increment="0.1"
                            star-size=35
                            v-model:rating="avgRating"
                            show-rating=false
                            read-only=true>
                        </star-rating>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">  
                <div class="border" v-for="(rating, index) in ratings" :key="index">
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
                        {{rate.criteria}}{{rate.discription}}
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
            ratings:[{totalRating:0}],
            projectName: this.$route.params.projectname,
            avgRating: 0
        }
    },
    mounted(){
        axios({
            method: "get",
            url: '/api/experiences/ratings/'+this.id,
            })
        .then(response => {
            this.ratings=response.data
            var totalRatingList = this.ratings.map(e=>e.totalRating)
            console.log('mapped element is' + totalRatingList)
            this.avgRating = totalRatingList
                .reduce((previousValue, currentValue )=> 
                    (previousValue + currentValue)/totalRatingList.length
                )
            })
    }

})
</script>
