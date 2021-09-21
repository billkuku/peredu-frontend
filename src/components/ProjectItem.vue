<template>
    <div class="row">
        <h2 class="col-sm-9">{{this.currentProject.projectName}}</h2>

        <font-awesome-icon @click="createExperience()" type="button" icon="star-half-alt" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="share your experience"/>
        
        <font-awesome-icon type="button" icon="share-square" size="3x" class="col-sm-1 icon"
            data-bs-toggle="tooltip" data-bs-placement="top" title="share the project"/>
    </div>
    
    <h4>{{this.currentProject.providerName}}</h4><br>
    <h6>{{this.currentProject.discription}}</h6>
    <ul class="mt-5 text-center border">
    <div v-for="(course, index) in currentProject.courses"
        v-bind:key="index"
        v-bind:value="courseName">
        <div class="accordion accordion-flush" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                    {{course.courseName}}
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {{course.discription}}
                </div>
                </div>
            </div>

        </div>
    </div>
    </ul>
    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip" data-bs-placement="top" title="apply for the project">
        Apply
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
