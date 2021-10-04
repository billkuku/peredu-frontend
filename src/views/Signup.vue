<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <img src="../assets/logo.png" alt="Peredu-Logo" class="mt-1 img-fluid" width="500"/>
                <h3>A platform for educational projects in all fields</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 text-center">
                <p>{{signupResult}}</p>
                <form @submit.prevent="onClickRegist">
                    <div class="col-lg-5 center">
                        <div class="">
                            <label for="inputEmail" class="col-md-3 mx-4 my-2 text-start">Email</label>
                            <input type="email" v-model="email" class="mx-4" style="width:200px;" id="inputEmail" required>
                        </div>
                        <div class="">
                            <label for="inputPassword" class="col-md-3 mx-4 my-2 text-start">Password</label>
                            <input type="password" v-model="password" class="mx-4" style="width:200px;" id="inputPassword" required>
                        </div>
                        <!-- <div class="">
                            <label for="repeatPassword" class="col-md-3 mx-4 my-2 text-start">Rep. Password</label>
                            <input type="password" class="mx-4" style="width:200px;" id="repeatPassword">
                        </div> -->
                    </div>
                    <button type="submit" class="btn btn-outline-dark mt-3">Regist</button>
                    <span class="text-center position-absolute ms-3" v-if="loadStatus===true">
                    <div class="spinner-border text-secondary my-3" style="width: 2rem; height: 2rem;" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </span>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';

export default defineComponent({
    name: 'Signup',
    components: {
    },
    data() {
        return{
            email: "",
            password: "",
            signupResult:"",
            loadStatus: false
        }
    },
    methods: {
        onClickRegist(){
            this.loadStatus=true,
            axios({
                method: "post", //指定传输的方式
                url: '/api/auth/signup',      //url
                data: {
                    email:this.email,
                    password: this.password
                }
            })
            .then(response => {
                this.signupResult = response.data,
                console.log(response),
                this.loadStatus=false
                })
            .catch((error) => {
                if( error.response ){
                    this.signupResult = error.response.data,
                    console.log(error.response.data),
                    this.loadStatus=false
                }
            });
        },
   }
})

</script>

<style>
.border {
    border: black;
    border-style: solid;
}

.center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
    align-content: center;
}
</style>
