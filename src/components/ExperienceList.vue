<template>
  <div class="container">
    <div class="row text-center">
      <div v-if="windowInnerWidth>1200" class="col-sm-4 pe-5">
        <img class="img-fluid" src="@/assets/experience-list.png">
      </div>
      <div class="col-sm-8">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Provider</th>
                <th scope="col">Rating</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="experience in experiences" :key="experience.id">
                <td>{{ experience.projectName }}</td>
                <td>{{ experience.providerName }}</td>
                <td>
                  <star-rating
                    increment="0.1"
                    star-size="20"
                    :rating="experience.totalRating"
                    show-rating=false
                    read-only=true
                    text-class="rating-text">
                  </star-rating></td>
                <td v-if="experience.enabled=true">published</td>
                <td v-else>will be published after review</td>
                <td>
                  <router-link :to="`/experiences/edit/${experience.id}`">
                    <font-awesome-icon icon="edit" size="1x" class="fa-color"/>
                  </router-link>
                </td>
                <td><font-awesome-icon type=button @click="onClickDeleteExperience(experience.id)" icon="trash-alt" size="1x" class="fa-color"/></td>
              </tr>
            </tbody>
          </table>
          <div v-if="loadStatus===true" class="my-5">
            <div class="fs-3">
              Loading
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div v-if="experiences.length===0 && loadStatus==false" class="text-center">
            <h4 class="text-muted">You are on a quiet island.</h4>
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
  name: 'Experiencelist',
  components: {
  },
  data() {
    return {
       experiences:"",
       windowInnerWidth: window.innerWidth,
       loadStatus: false
    }
  },
  activated() {
    this.getExperiences()
  },
  beforeRouteLeave(){
    this.experiences = ""
  },
  methods: {
    onClickDeleteExperience(experienceId:string) {
      axios({
        method: "post",
        url: '/api/experiences/list/delete',
        params: {
            experienceId,
        }
      }).then(response => {
          alert(response.data),
          this.getExperiences()
        })
    },
    getExperiences() {
      this.loadStatus = true
      axios
      .get('/api/experiences/list')
      .then(response => {
          this.experiences = response.data,
          this.loadStatus = false
      })
    }
  }
})
</script>

<style>
.rating-text{
  padding-left: 2px;
}
</style>