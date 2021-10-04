<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <img src="../assets/logo.png" alt="Peredu-Logo" class="mt-3 img-fluid" width="500">
        <h3>A platform for education!</h3>
      </div>
    </div>
    <div>
      <div class="col-sm-5 mt-3 center">
        <form @submit.prevent="onClickLogin">
          <div class="row">
            <div class="text-center">
              <label for="inputEmail" class="col-md-3 mx-4 my-2 text-start">Email</label>
              <input type="email" v-model="form.email" class="col-sm-5 mx-4 login-form-control" id="inputEmail" required>
            </div>
          </div>
          <div class="row">
            <div class="text-center">
              <label for="inputPassword" class="col-md-3 mx-4 my-2 text-start">Password</label>
              <input type="password" v-model="form.password" class="col-sm-5 mx-4 login-form-control" id="inputPassword" required>
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-outline-dark mt-3">Login</button>
            <span class="text-center position-absolute ms-3" v-if="loadStatus===true">
              <div class="spinner-border text-secondary my-3" style="width: 2rem; height: 2rem;" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </span>
          </div>
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
      loadStatus: false,
      testmsg:""
    }
  },
  methods: {
    ...mapActions({
      signInAction: 'auth/signIn'
    }),
    onClickLogin() {
      this.loadStatus = true,
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
