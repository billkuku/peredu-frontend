<template>
<div class="container">
  <div class="text-center home-middelword">
    Learn and Work start with Sharing
  </div>
  <div v-if="user===null" class="text-center mt-3">
    <button class="btn btn-outline-dark fs-4" @click="clickToSignin">Join us !</button>
  </div>
  <div class="row d-flex justify-content-around mt-4 border-top border-3 pt-5">
    <div class="col-sm fs-5 font-propagenda pe-5 text-end mb-4">
      <div>
        <span class="text-uppercase fs-4">
          <font-awesome-icon icon="user-graduate" size="1x" class="fa-color"/>&nbsp;As student
        </span> 
        <br>share your course experience, help </div>
      <div class="fs-5 font-title1-color">- course provider optimize</div>
      <div class="fs-5 font-title1-color">- other student choose.</div>
      <div class="mt-3"><button @click="clickCreateExperience" type="button" class="btn-first btn-lg" style="width: 220px;">Share Experience</button></div>
    </div><br>
    <div class="col-sm fs-5 font-propagenda ps-5">
      <div>
        <span class="text-uppercase fs-4">
          <span ><font-awesome-icon icon="school" size="1x" class="fa-color"/></span>&nbsp;As school
        </span> 
        <br> publish your education program, help
      </div>
      <div class="fs-5 font-title1-color">- more students find suitable courses</div>
      <div class="fs-5 font-title1-color">- more students find suitable courses</div>
      <div class="mt-3"><button @click="clickCreateProject" type="button" class="btn-lg btn-first" style="width: 220px;">Publish Program</button></div>
    </div>
  </div>

  <!-- <div class="row mt-3 d-flex justify-content-around"> 

    <button @click="clickCreateExperience" type="button" class="btn-lg btn-first" style="width: 220px;">Share Experience<br> (as student)</button> 

    <button @click="clickCreateProject" type="button" class="btn-lg btn-first" style="width: 220px;">Publish Program<br> (as school)</button>
        
  </div> -->
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import RouteTo from '../mixins/RouteTo'

export default defineComponent({
  name: "usage",
  mixins: [RouteTo],
  computed: {
    ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    },
})

</script>

<style>
.home-middelword{
  color: #547560;
  font-size: 25px;
  font-family: Comic Sans MS;
  font-style: oblique ;
}
</style>