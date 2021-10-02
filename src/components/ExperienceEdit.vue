<template>
<div class="container">
    <div v-if="windowInnerWidth>500" class="min-vh-10 slogan py-5 fs-3 text-center nav flex-column justify-content-center experience-background" style="position:relative; top:-40px;">
        <div class="pt-2 pb-1">No Criteria you want?</div>
        <div class="pb-0">Create one yourself.</div>
    </div>
    <form @submit.prevent="onClickSubmitExperience">
        <div class="row border-bottom">
            <span class="col-sm-6 ms-3 fs-3">
                {{experience.projectName}}<br>  
                {{experience.providerName}}
            </span>
            <span class="col-sm-5 ms-3 mt-3">
                <h5>Overall satisfaction</h5>
                <star-rating
                    increment="0.1"
                    star-size=25
                    v-model:rating="experience.totalRating"
                    show-rating=false>
                </star-rating>
            </span>
        </div>
        <!-- iterate rating list -->
        <div v-if="experience.rating.length>0">
            <div v-for="(rating, index) in experience.rating" :key="index" class="row mt-5 mb-3">
                <div class="col-sm-4 ms-3">
                    <h5>            
                        <font-awesome-icon 
                            @click="onClickDeleteCriteria(index)" 
                            icon="trash-alt" 
                            size="1x" 
                            type="button"
                            class="me-2"/>
                        {{rating.criteria}}
                    </h5>
                    <star-rating
                        increment="0.5"
                        star-size=25
                        v-model:rating="rating.stars"
                        show-rating=false>
                    </star-rating>
                </div>
                <div class="col-sm-6 mt-1">
                    <textarea name="rating"
                        style='min-width: 100%'
                        rows=2
                        placeholder="" 
                        maxlength="550"
                        v-model="rating.discription"
                        class="form-control">
                    </textarea>
                </div>
            </div>
        </div>
        <!-- add criteria button and input -->
        <div class="row mt-5 mb-2">
            <div class="col-sm-2">
                <input class="form-control"  
                    @keyup.enter="onClickAddCriteria" 
                    type="text" 
                    v-model="newCriteria" 
                    placeholder="input new criteria">
            </div>
            <div class="col-sm-1 text-center my-1">
                <p class="btn-sm btn-first"
                    @click="onClickAddCriteria" 
                    type="button">create
                </p>
            </div>
        </div>  

        <div class="mt-5 d-flex justify-content-end">
            <div class="col-sm-1">
                <button type="submit" class="btn btn-outline-dark align-items-end">Submit</button>
            </div>
            <div class="col-sm-3">
                <router-link to="/experiences/list"><p class="btn">Back to my experiences</p></router-link>
            </div>
        </div>

    </form>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'

export default defineComponent({
    name: 'ExperienceEdit',
    components: {
    },
    props:{currentProject:Object},
    data() {
        return {
            currentUrl:"",
            experience: {
                id: "",
                projectName: this.$route.params.projectName,
                providerName: this.$route.params.providerName,
                enabled: false,
                projectId: this.$route.params.projectId,
                rating: [{}],
                totalRating:""
            },
            newCriteria:"",
            windowInnerWidth: window.innerWidth
        }
    },
    methods: {
        onClickSubmitExperience() {
            console.log(this.experience)
            axios({
                method: "post",
                url: '/api/experiences/edit/'+this.experience.id,
                data: {
                    id: this.experience.id,
                    projectName: this.experience.projectName,
                    providerName: this.experience.providerName,
                    enabled: this.experience.enabled,
                    projectId: this.experience.projectId,
                    rating: this.experience.rating,
                    totalRating:this.experience.totalRating,
                    username:"",
                }
            })
            .then(response => {
                alert(response.data), 
                this.$router.replace({
                    path: '/experiences/list'}),
                console.log(response.data)
                })
        },
        getExperience() {
            if(this.$route.params.id) {
                this.experience.id = this.$route.params.id.toString(),
                axios.get("/api/experiences/edit/"+this.experience.id)
                .then(response => {
                    this.experience = response.data,
                    console.log(this.experience)
                })
            }
        },
        onClickAddCriteria(){
            this.experience.rating.push({criteria:this.newCriteria}),
            this.newCriteria=""
        },
        onClickDeleteCriteria(index){
            this.experience.rating.splice(index, 1)
        }
    },
    activated: function() {
        this.getExperience()
    },
    beforeRouteLeave(){
        this.experience = {
            id: "",
            projectName: "",
            enabled: false,
            providerName: "",
            projectId: "",
            rating:[],
            totalRating:""
        }
    },
    mounted(){
        this.experience.rating=[]
    }
})

</script>

<style>
.experience-background{
    background-image: url("../assets/experience-top.png");
    background-position:center; 
    background-repeat: no-repeat;
    background-size: 100%;
}
.experience-background::before{
    content:"";
    display: block;
    padding:top;
}
</style>