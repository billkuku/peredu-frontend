<template>
  <div class="wrapper">
      <globale-header></globale-header>
      <div v-if="$route.path!=='/home'">
        <search-bar></search-bar>
      </div>
      <div v-if="$route.path==='/home'">
        <searchbar-home></searchbar-home>
      </div>
      <router-view/>
      <!-- <global-bottom></global-bottom> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobaleHeader from './components/GlobalHeader.vue'
import SearchBar from './components/SearchBar.vue'
// import GlobalBottom from './components/GlobalBottom.vue'
import SearchbarHome from './components/SearchbarHome.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobaleHeader,
    // GlobalBottom,
    SearchBar,
    SearchbarHome
  },
  data () {
    return {
      //
    }
  },

})
</script>

<style>
.border-first {
  border: solid;
  border-color: lightgray;
  border-radius: 10px;
}
.btn-first{
  color: white;
  background-color: #547560; 
}
.btn-first:hover {
  color: black;
  background-color: lightgray;
}
.font-logo {
  font-family: "Times New Roman",Georgia,Serif;
}
.font-propagenda{
  font-family: Trebuchet MS;
  font-size: 40px;
}
.font-title1 {
  color:#547560;
  font-family: Consolas;
}
.font-title1-color {
  color:#547560;
  font-family: Arial, Helvetica, sans-serif;
}
.font-title2 {
  color:#344955;
  font-family: Consolas;
}
.search-btn {
  position: relative;
  top:5px;
  left:30px;
}
.fa-color {
  color: #547560;
}
.slogan {
    font-family: Comic Sans MS;
    color: white;
    font-size: 30px;
}
.accordion-button:hover{
  background-color: gray;
  color:white;
}
/* .wrapper{
  background-color: rgb(247, 241, 241);
} */
</style>