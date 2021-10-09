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
                if(experiences.length!==0){
                    var ratingList = experiences.map(e=>e.totalRating)
                    this.avgRating = ratingList
                        .reduce((previousValue, currentValue )=> 
                            (previousValue + currentValue)/ratingList.length
                        )
                } else {
                    this.avgRating = 0
                }
            })
            return this.avgRating
        }
    }
}