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

    <button type="button" class="btn btn-secondary mt-2" data-bs-toggle="tooltip" data-bs-placement="top" title="apply for the project">
        Apply
    </button>
</template>
>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "SearchresultItem",
    props: ['currentProject'],
    methods: {
        createExperience() {
            this.$router.push({name:"Experiencecreate", 
            params:{projectName: this.currentProject.projectName, projectId:this.currentProject.id, providerName:this.currentProject.providerName}})
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
