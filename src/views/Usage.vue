<template>
  <div>
    {{msg}}
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