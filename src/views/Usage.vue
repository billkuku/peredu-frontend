<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-sm-5">
        <img class="img-fluid" src="../assets/usage.png">
      </div>
      <div class="col-sm-7 fs-5 text-center py-5" style="font-family:'Comic Sans MS'; color:#344955;">
        Struggling to choose a school or a course?<br>
        Boring course?<br>
        Bad grades?<br>
        What you have learned doesn’t help you find a suitable job?
      </div>
    </div>
    <div class="row pb-3 p-5 border-4 border-bottom">
      <span>Have you ever thought that the problem does not come from you or the teacher, <br>
      <div class="text-center py-3">
        <em>But simply <strong class="fs-5" style="color:#344955;">inappropriate!</strong></em><br></div>
      When choosing an education, 
      <strong style="color:#344955;"> different schools, goals, and personality characteristics </strong> 
      will affect your enthusiasm, efficiency, and final result in the training process.
      But when you really want to learn more about a training institution, apart from the 
      <strong style="color:#344955;">boring cookie-cutter official introduction</strong>, 
      it is difficult for you to get more authentic and useful information.
      </span>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="px-5">
          <div class="text-center py-4 fs-4" style="font-family:'Comic Sans MS';">
            Therefore, <strong style="color:#344955;">PEREDU</strong> 
            provides a platform for students and educational institutions to communicate and understand each other.
          </div>
          <h5><li>What you can do here?</li></h5>
          <font-awesome-icon icon="school" size="1x" class="fa-color"/>&nbsp;As school, 
            <div class="ps-3">Publish education programs, let more students know you.</div>
            <div class="ps-3">Understand the real needs of students through online communication.</div>
          <font-awesome-icon icon="user-graduate" size="1x" class="fa-color"/>&nbsp;As student, 
            <div class="ps-3">Create your own evaluation criteria and let the school know your needs.</div>
            <div class="ps-3">Share and Get education experiences.</div>
          <h5 class="mt-3"><li>What you can expected from us?</li></h5>
          Anything could be down by an online education plattform,
          to help people get better and more appropriate educational resources at each stage.
          <br><br><h5><li>What is our vision?</li></h5>
          We want education to let you find your own value at every stage and help you reach your own goal.
          <br><br><h5><li>What we are doing now?</li></h5>
          We are building the infrastructure of this plattform.
          Specifically, we are designing course application.
        </div>
      </div>
    </div>
    <div v-if="user===null" class="text-center my-3">
      <button class="btn btn-outline-dark fs-4" @click="clickToSignin">Join us !</button>
    </div>
  </div>
</template>

<script lang="ts">
import RouteTo from "@/mixins/RouteTo";
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'About',
  components: {
    //ValidationProvider
  },
  mixins: [RouteTo],
  data() {
    return {
      msg:"",
      errored:false,
      loading:true
    }
  },
  computed: {
    ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    },

})

</script>