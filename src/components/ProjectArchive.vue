<template>
<div class="container">
    <div class="table-responsive">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Project name</th>
                    <th scope="col">discription</th>
                    <th scope="col">unarchive</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td >{{ project.projectName }}</td>
                    <td >{{ project.discription }}</td>
                    <td>
                        <font-awesome-icon type=button @click="onClickUnarchive(project.id)" icon="inbox" size="1x" class="fa-color"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="loadStatus===true" class="text-center">
            <div class="fs-3">
            Loading
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>
        <div v-if="projects.length===0 && loadStatus==false" class="text-center">
            <h4 class="text-muted">This is a quiet island.</h4>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
    name: 'Projectarchive',
    components: {
    
    },
    data() {
        return {
            projects:"",
            projectId: "",
            loadStatus: false
        }
    },
    activated() {
        this.getArchivedProjects()
    },
    beforeRouteLeave(){
        this.projects = ""
    },
    methods: {
        onClickUnarchive (projectId:string) {
            axios({
                    method: "post",
                    url: '/api/projects/archive/',
                    data: {
                        id: projectId
                    }
                }).then(response => {
                        alert(response.data),
                        this.getArchivedProjects()
                    })
            },
        getArchivedProjects(){
            this.loadStatus=true,
            axios
            .get('/api/projects/archive')
            .then(response => {
                this.projects = response.data,
                this.loadStatus=false
            })
        }
    }
})
</script>