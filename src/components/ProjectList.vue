<template>
<div>
  <div class="text-end">
    <router-link to="/projects/edit" class="btn btn-outline-dark my-1">Create a Program</router-link>
  </div>
  <div class="table-responsive">
    <table class="table table-hover table-sm table-responsive">
      <thead class="thead-dark">
          <tr>
          <th scope="col">Program</th>
          <th scope="col-sm-auto">discription</th>
          <th scope="col">edit</th>
          <th scope="col">archive</th>
          <th scope="col">delete</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td >{{ project.projectName }}</td>
          <td >{{ project.discription }}</td>
          <td ><router-link :to="`/projects/edit/${project.id}`"><font-awesome-icon icon="edit" size="1x" class="fa-color"/></router-link></td>
          <td>
            <router-link @click="onClickArchive(project.id)" to="/projects/archive">
              <font-awesome-icon icon="archive" size="1x" class="fa-color"/>
            </router-link>
          </td>
          <td><font-awesome-icon type=button @click="onClickDeleteProject(project.id)" icon="trash-alt" size="1x" class="fa-color"/></td>
        </tr>
      </tbody>
    </table>
    <div v-if="loadStatus===false">
      <div class="fs-3">
        Loading
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
  name: 'Projectlist',
  components: {
    
  },
  data() {
    return {
       projects:"",
       projectId: "",
       loadStatus: false,
    }
  },
  activated() {
    this.getProjects()
  },
  beforeRouteLeave(){
    this.projects = ""
  },
  methods: {
    onClickArchive (projectId:string) {
      axios({
        method: "post",
        url: '/api/projects/list',
        data: {
            id: projectId,
        }
      }).then(response => {
          alert(response.data)
        })
    },
    onClickDeleteProject(projectId:string) {
      axios({
        method: "post",
        url: '/api/projects/delete',
        params: {
            projectId,
        }
      }).then(response => {
          alert(response.data),
          this.getProjects()
        })
    },
    getProjects() {
      axios
      .get('/api/projects/list')
      .then(response => {
          this.projects = response.data,
          this.loadStatus = true
      })
    }
  }
})
</script>