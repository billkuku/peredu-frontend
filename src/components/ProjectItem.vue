<template>
    <div class="row">
        <h2 class="col-sm-9">{{this.currentProject.projectName}}</h2>

        <font-awesome-icon @click="createExperience()" type="button" icon="star-half-alt" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="leave a rating to the program"/>
        
        <font-awesome-icon type="button" icon="share-square" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="share the program"/>
    </div>
    
    <h4>{{this.currentProject.providerName}}</h4><br>
    <h6>{{this.currentProject.discription}}</h6>
    <div class="mt-5">
        <h6 class="fs-4 font-title1">Courses of the program:</h6>
        <ul class="">
            <div v-for="(course, index) in currentProject.courses"
                v-bind:key="index"
                v-bind:value="courseName">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" v-bind:id="'heading-'+index">
                        <button class="fs-4 accordion-button collapsed" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse-'+index" aria-expanded="true" v-bind:aria-controls="'collapse-'+index">
                            {{course.courseName}}
                        </button>
                        </h2>
                        <div v-bind:id="'collapse-'+index" class="accordion-collapse collapse" v-bind:aria-labelledby="'heading-'+index" data-bs-parent="#accordion">
                            <div class="accordion-body">
                                {{course.discription}}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ul>   
    </div>
    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip" data-bs-placement="top" title="apply for the project" disabled>
        Apply (in developing)
    </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "SearchresultItem",
    props: ['currentProject'],
    methods: {
        createExperience() {
            this.$router.push({name:"Experiencecreate", 
            params:{
                projectName: this.currentProject.projectName, 
                projectId:this.currentProject.id, 
                providerName:this.currentProject.providerName}})
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
