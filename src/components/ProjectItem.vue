<template>
    <div class="row">
        <h2 class="col-sm-9">{{currentProject.projectName}}</h2>
        {{currentProject.programImages.length}}
        <font-awesome-icon @click="createExperience()" type="button" icon="star-half-alt" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="leave a rating to the program"/>
        <font-awesome-icon type="button" icon="share-square" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="share the program"/>
    </div>
    
    <h4>{{currentProject.providerName}}</h4>
    <router-link 
        :to="{path:`/scho/${currentProject.providerName}/${currentProject.projectName}/${currentProject.id}`}">
        <star-rating
            increment="0.1"
            star-size=15
            show-rating=false
            v-model:rating="avgRating"
            active-color="gray"
            read-only>
        </star-rating>
    </router-link>
    <br>
    <h6>{{this.currentProject.discription}}</h6>
    <div class="mt-5">
        <h6 class="fs-6 font-title1">Included courses:</h6>
        <ul class="">
            <div v-for="(course, index) in currentProject.courses"
                v-bind:key="index"
                v-bind:value="courseName">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" v-bind:id="'heading-'+index">
                        <button class="fs-6 accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse-'+index" aria-expanded="true" v-bind:aria-controls="'collapse-'+index">
                            {{course.courseName}}
                        </button>
                        </h2>
                        <div v-bind:id="'collapse-'+index" class="accordion-collapse collapse" v-bind:aria-labelledby="'heading-'+index" data-bs-parent="#accordion">
                            <div class="accordion-body fs-6">
                                {{course.discription}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ul>   
    </div>
    <button type="button" class="btn btn-secondary mt-2" @click="applyProgram" data-bs-toggle="tooltip" data-bs-placement="top" title="apply for the project" disabled>
        Apply (in developing)
    </button>
</template>

<script lang="ts">
import RouteTo from '@/mixins/RouteTo'
import axios from 'axios'
import {defineComponent} from 'vue'
import AvgRating from '@/mixins/AvgRating'

export default defineComponent({
    name: "SearchresultItem",
    props: ['currentProject'],
    mixins: [RouteTo, AvgRating],
    data(){
        return {
            avgRating:0
        }
    },
    methods: {
        createExperience() {
            this.$router.push({name:"Experiencecreate", 
            params:{
                projectName: this.currentProject.projectName, 
                projectId:this.currentProject.id, 
                providerName:this.currentProject.providerName}})
        },
        applyProgram(){
            axios({
                method: "post",
                url: '/api/projects/apply',
                params: {
                    projectId:this.currentProject.id,
                }
            }).then(response => {
                alert(response.data)
                })
        }
    },
    mounted(){
        this.avgRating = this.getAvgRating(this.currentProject.id)
    },
    watch:{
        currentProject() {
            this.avgRating = this.getAvgRating(this.currentProject.id)
        }
    }
})
</script>

<style>
.icon{
    color: gray;
}
.icon:hover{
    color: yellowgreen;
}
</style>
