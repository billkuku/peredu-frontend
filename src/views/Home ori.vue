<template>
<div class="text-center">
  <router-link to="/home/usage" class="text-dark">Usage</router-link>&nbsp;&nbsp;&nbsp;|
  <router-link to="/home/about" class="text-dark">About</router-link>&nbsp;&nbsp;&nbsp;|
  <router-link to="/home/join" class="text-dark">Join</router-link>&nbsp;&nbsp;&nbsp;|
</div>
<div class="text-center">
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',

  components: {
    
  },
});
</script>
