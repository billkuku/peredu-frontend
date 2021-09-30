<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-sm border">
                <img class="img-fluid" src="../assets/dashboard-welcome.png"/>
            </div>
            <div class="col-sm">
                <div class="row border align-self-center py-3">
                    <div class="text-center fs-3">Hello, challenger</div>
                    <div class="text-center fs-4">{{user}}</div>
                    <div class="text-center fs-6">Now we are at: {{date}}</div>
                </div>
                <div class="row mt-5">
                    <table class="table fs-5 text-center table-bordered border-white table-color">
                        <tr>
                            <td class="dashboard-btn py-2"><button class="table-color" @click="clickCreateProject" style="width:100%;">Program Publish</button></td>
                            <td class="dashboard-btn py-2"><button class="table-color" style="width:100%;">Program Manage</button></td>
                        </tr>
                        <tr>
                            <td class="dashboard-btn py-2"><button class="table-color" style="width:100%;">Experience Manage</button></td>
                            <td class="dashboard-btn py-2"><button class="table-color" style="width:100%;">Account Setting</button></td>
                        </tr>
                        <tr>
                            <td class="dashboard-btn py-2"><button class="table-color" style="width:100%;">Experience Share</button></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.table-color{
    background-color: #547560;
    color: white;
}
.dashboard-btn{
    font-family: sans-serif;
}
.dashboard-btn:hover{
    background-color: black;
    color: white;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import RouteTo from '../mixins/RouteTo'


export default defineComponent({
    data(){
        return {
            date: Date()
        }
    },
    mixins: [RouteTo],
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    }
})
</script>
