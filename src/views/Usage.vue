<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="text-start p-5">
          <h4>What is education?</h4>
          Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. 
          Current educational methods include teaching, training, storytelling, discussion, directed research.
          <br><br><h4>What you can do here?</h4>
          <ul>
            <li>As school, publish education programs</li>
            <li>As student, share education experiences</li>
          </ul>
          <h4>What you can expected from us?</h4>
          Anything could be down by an online education plattform,
          to help people get better and more appropriate educational resources at every stage.
          <br><br><h4>What is our vision</h4>
          We want education to let you find your own value at every stage and help you reach your own goal.
          <br><br><h4>What we are doing now</h4>
          We are building the infrastructure of this plattform.
          Specifically, we are designing course application.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'About',
  components: {
    //ValidationProvider
  },
  data() {
    return {
      msg:"",
      errored:false,
      loading:true
    }
  }

})

</script>