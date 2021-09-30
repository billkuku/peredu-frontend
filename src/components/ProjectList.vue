<template>
  <div class="table-responsive">
    <table class="table table-hover table-sm table-responsive">
      <thead class="thead-dark">
          <tr>
          <th scope="col">Program</th>
          <th scope="col-sm-auto">discription</th>
          <th scope="col">edit</th>
          <th scope="col">archive</th>
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
  <router-link to="/projects/edit" class="btn btn-outline-dark mt-2">Create a Program</router-link>
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
    axios
    .get('/api/projects/list')
    .then(response => {
        this.projects = response.data,
        this.loadStatus = true
    })
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
    }
  }
})
</script>