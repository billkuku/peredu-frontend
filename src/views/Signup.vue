<template>
    <div class="container">
        <img src="../assets/logo.png" alt="Peredu-Logo" class="mt-1" width="400"/>
        <h2>A platform for educational projects in all fields</h2>
        <h3>{{msg}}</h3>
        <p>{{signupResult}}</p>
        <form @submit.prevent="onClickRegist">
            <div class="col-sm-5 center border">
                <div class="row wi px-5 center border">
                    <label for="inputEmail" class="col-md-2 mx-4 my-2 text-start border">Email</label>
                    <input type="email" v-model="email" class="col-sm-4 mx-4 login-form-control" id="inputEmail">
                </div>
                <div class="row center wi px-5">
                    <label for="inputPassword" class="col-md-2 mx-4 my-2 text-start">Password</label>
                    <input type="password" v-model="password" class="col-sm-4 mx-4 login-form-control">
                </div>
                <div class="row center wi px-5">
                    <label for="inputPassword" class="col-md-2 mx-4 my-2 text-start">Repeat Password</label>
                    <input type="password" class="col-sm-4 mx-4 login-form-control">
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-2 reg-btn">Regist</button>
        </form>
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
            msg:"",
            email: "",
            password: "",
            signupResult:""
        }
    },


    methods: {
        onClickRegist(){
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
                console.log(response)})
            .catch((error) => {
                if( error.response ){
                    this.signupResult = error.response.data,
                    console.log(error.response.data); // => the response payload 
                }
            });
        },
   },
    mounted() {
    axios
    .get('/api/auth/test')
    .then(response => {
        this.msg = response.data
    })
    // .catch(error => {
    //     console.log(error)
    //     this.errored = true
    // })
    // .finally(() => this.loading = false)
    }
})

</script>

<style>
.login-form-control {
    width: 200px;
    background-color: white;
}

.reg-btn{
    background-color: #9BAF5D;
    border: none;
    color: black;
    font-weight: 500;
}

.border {
    border: black;
    border-style: solid;
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
