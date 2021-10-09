import axios from "axios"

export default {
    data() {
        return {
            avgRating:0,
        }
    },
    methods:{
        getAvgRating(projectId){
            axios({
                method: "get",
                url: '/api/experiences/ratings/'+projectId,
                })
            .then(response => {
                var experiences=response.data
                var ratingList = experiences.map(e=>e.totalRating)
                console.log('mapped element is' + ratingList)
                this.avgRating = ratingList
                    .reduce((previousValue, currentValue )=> 
                        (previousValue + currentValue)/ratingList.length
                    )
            })
            return this.avgRating
        }
    }
}