<template>
  <div class="container">
    <div class="col-md-12 center">
      <img src="../assets/logo.png" alt="Peredu-Logo" class="mt-5" width="400">
      <h2>A platform for education!</h2>
      <div class="col-sm-5 mt-5 center">
        <form @submit.prevent="onClickLogin" class="text-center">
              <div class="row px-5 center">
                  <label for="inputEmail" class="col-md-2 mx-4 my-2 text-start">Email</label>
                  <input type="email" v-model="form.email" class="col-sm-4 mx-4 login-form-control" id="inputEmail">
              </div>
              <div class="row px-5 center">
                  <label for="inputPassword" class="col-md-2 mx-4 my-2 text-start">Password</label>
                  <input type="password" v-model="form.password" class="col-sm-4 mx-4 login-form-control" id="inputPassword">
              </div>
            
            <button type="submit" class="btn btn-outline-dark mt-2">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';
import {mapActions} from 'vuex';



export default defineComponent({
  name: 'Login',
  components: {
    
  },
  data() {
    return {
      form: {
        email:'',
        password:''
      },
       testmsg:""
    }
  },
  methods: {
    ...mapActions({
      signInAction: 'auth/signIn'
    }),
    onClickLogin() {
      this.signInAction(this.form)
      .then(() => {
                this.$router.replace({
                    name: 'Dashboard'
                })
            })
      .catch(() => {
        console.log('signin failed')
      })
    }
  },
  mounted() {
    axios
    .get('/api/auth/test')
    .then(response => {
        this.testmsg = response.data
    })
  }
})
</script>

<style>
.login-form-control {
    width: 200px;
    background-color: white;
}

.wi {
    width: 555;
}

.center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
    align-content: center;
}
</style>
