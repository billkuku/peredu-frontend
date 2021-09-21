<template>
  <div class="container">
    <div class="row text-center">
      <div v-if="windowInnerWidth>1200" class="col-sm-5 me-5">
        <img class="img-fluid" src="../assets/experience-list.png">
      </div>
      <div class="col-sm-auto">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Provider</th>
                <th scope="col">Rating</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="experience in experiences" :key="experience.id">
                  <td>{{ experience.projectName }}</td>
                  <td>{{ experience.providerName }}</td>
                  <td>
                    <star-rating
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
                </tr>
            </tbody>
          </table>
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
       windowInnerWidth: window.innerWidth
    }
  },
  activated() {
    axios
    .get('/api/experiences/list')
    .then(response => {
        this.experiences = response.data
    })
  },
  beforeRouteLeave(){
    this.experiences = ""
  },
  methods: {

  }
})
</script>

<style>
.rating-text{
  padding-left: 2px;
}
</style>