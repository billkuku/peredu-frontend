<template>
<div class="container-fluid">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/home"><img src="../assets/logo.png" alt="Peredu-Logo" width="110"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/home" class="nav-link text-dark fs-6">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/usage" class="nav-link text-dark fs-6">Usage</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link text-dark fs-6">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/test" class="nav-link text-dark fs-6">TechStacks</router-link>
        </li>
        <!-- <li class="nav-item" v-if="user!==null">
          <div type=button @click="clickToDashboard" class="nav-link text-dark fs-6">Dashboard</div>
        </li> -->
      </ul>
      <ul v-if="!authenticated" class="navbar-nav ms-auto">
        <li class="nav-item my-2">
          <router-link to="/signin" class="btn btn-outline-dark mx-2">Signin</router-link>
          <router-link to="/signup" class="btn btn-outline-dark mx-2">Signup</router-link>
        </li>
      </ul>
      <ul v-else class="navbar-nav ms-auto">
        <li class="nav-item  mx-2">
            <dropdown :title="`Hello, `+user">
              <dropdown-item><router-link to="/account" class="dropdown-item">Setting</router-link></dropdown-item>
              <dropdown-item><router-link to="/experiences" class="dropdown-item">MyExperiences</router-link></dropdown-item>
              <dropdown-item><router-link to="/projects" class="dropdown-item">MyPrograms</router-link></dropdown-item>
              <dropdown-item><router-link to="/dashboard" class="dropdown-item">Dashboard</router-link></dropdown-item>
            </dropdown>
        </li>
        <li>
          <router-link to="/signin" @click.prevent="signOut" class="btn btn-outline-dark mx-2 my-2">Signout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './Dropdownitem.vue'
import { mapGetters, mapActions } from 'vuex'
import RouteTo from '../mixins/RouteTo'

export default defineComponent({
    name:'GlobalHeader',
    components: {
      Dropdown,
      DropdownItem
    },
    mixins: [RouteTo],
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user'
      })
    },
    methods: {
      ...mapActions({
          signOutAction: 'auth/signOut'
      }),
      signOut () {
        this.signOutAction().then(() => {
          this.$router.replace({
              path: '/signin'
          })
        })
      }
    }
})
</script>