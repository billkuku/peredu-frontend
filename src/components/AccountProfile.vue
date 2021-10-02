<template>
    <div class="row border-first mb-2">
        <span class="col-sm-9 my-2">
            <div class="fs-4 py-2"><span class="fs-6">user name:&nbsp;&nbsp;</span>{{user.username}}</div>
            <div class="text-secondary">
                Default user name is email address, 
                It is currently the only identification of user, 
                change is not supported for the time being.
            </div>
        </span>
        <span class="col-sm-2 text-center align-self-center">
            <!-- modal button -->
            <button type="button" class="btn btn-outline-secondary mt-2 disabled" data-bs-toggle="modal" data-bs-target="#usernameModal">change</button>
            <!-- Modal -->
            <div class="modal fade" id="usernameModal" tabindex="-1" aria-labelledby="#usernameModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="usernameModal">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            user name
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </span> 
    </div>


    <div class="row border-first py-2 my-2">
        <span class="col-sm-9">
            <div class="fs-4 py-2"><span class="fs-6">provider name:&nbsp;&nbsp;</span>{{user.providerName}}</div>
            <div class="text-secondary">
                You can use the company or institution name, etc. 
                It is the only way for students to identify you.
            </div>
        </span>
        <span class="col-sm-2 text-center align-self-center">
            <!-- button for modal -->
            <button type="button" class="btn btn-outline-dark mt-2" data-bs-toggle="modal" data-bs-target="#providerNameModal">change</button>
            <!-- Modal -->
            <div class="modal fade" id="providerNameModal" tabindex="-1" aria-labelledby="#providerNameModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="providerNameModal">Edit name as project provider</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label for="inputProviderName">new supplier name</label>
                            <input type="providerName" v-model="providerName" class="form-control" id="inputProviderName" aria-describedby="providerName" placeholder="Enter name">
                            <small id="providerNameHelp" class="form-text text-muted">identification for other users.</small>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="submitNewProviderName" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </span> 
    </div>

    <div class="row border-first py-2 my-2">
        <span class="col-sm-9">
            <div class="fs-4 py-2"><span class="fs-6">password:&nbsp;&nbsp;</span>***************</div>
            <div class="text-secondary">
                Change your password here.
                Your password will be encrypted and stored on the server, 
                even if we cannot see your password, it is a string of encrypted characters.
            </div>
        </span>
        <span class="col-sm-2 text-center align-self-center">
            <!-- button for modal -->
            <button type="button" class="btn btn-outline-dark mt-2" data-bs-toggle="modal" data-bs-target="#passwordModal">change</button>
            <!-- Modal -->
            <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="#passwordModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="passwordModal">Change your password</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label for="inputCurrentPassword">current password</label>
                            <input type="password" v-model="currentPassword" class="form-control" id="inputCurrentPassword" aria-describedby="currentPassword" placeholder="">
                            <label for="inputNewPassword">new password</label>
                            <input type="password" v-model="newPassword" class="form-control" id="inputNewPassword" aria-describedby="newPassword" placeholder="">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" @click="submitChangePassword" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </span> 
    </div>

</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AccountProfile",
    data() {
        return {
            user:{},
            providerName:"",
            currentPassword:"",
            newPassword:""
        }
    },
    methods: {
        submitNewProviderName(){
            axios({
                method: "post",
                url: "/api/user/account/providerName",
                params: {
                    providerName:this.providerName
                }
            })
            .then(response => {
                alert(response.data), 
                console.log(response.data)
                })
        },
        submitChangePassword(){
            axios({
                method: "post",
                url: "/api/user/account/password",
                params: {
                    currentPassword:this.currentPassword,
                    newPassword:this.newPassword
                }
            })
            .then(response => {
                alert(response.data), 
                console.log(response.data)
                })
        }
    },
    mounted(){
        axios({
            method: "get",
            url: "/api/user/account"
        })
        .then(response => {
            this.user = response.data,
            console.log(response.data)
            })
    },
    beforeRouteLeave(){
        this.currentPassword="",
        this.newPassword=""
    }

})
</script>

<style>

</style>