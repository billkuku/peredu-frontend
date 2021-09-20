<template>
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
                    <router-link @click="onClickUnarchive(project.id)" to="/projects/list">
                        <font-awesome-icon icon="inbox" size="1x" class="fa-color"/>
                    </router-link>
                </td>
            </tr>
        </tbody>
        </table>
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
            projectId: ""
        }
    },
    activated() {
        axios
        .get('/api/projects/archive')
        .then(response => {
            this.projects = response.data
        })
    },
    beforeRouteLeave(){
        this.projects = ""
    },
    methods: {
    onClickUnarchive (projectId:string) {
            console.log(projectId)
            axios({
                    method: "post",
                    url: '/api/projects/archive/',
                    data: {
                        id: projectId
                    }
                }).then(response => {
                        console.log(response.data),
                        alert(response.data)
                    })
        }
    }
})
</script>