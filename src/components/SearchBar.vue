<template>
    <div class="container">
        <div class="row">
            <form @submit.prevent="onClickSubmitSearch" class="sb-form row p-3 d-flex justify-content-center">
                <div class="col-sm-7 mx-4">
                    <label for="validationDefault01" class="form-label">Program/Supplier</label>
                    <input type="text" class="form-control" placeholder='Enter institution or project name'
                        v-model="searchKeywords"
                        required>
                </div>
                <!-- <div class="col-sm-2">
                    <label for="validationDefault02" class="form-label">Location</label>
                    <input type="text" class="form-control" placeholder="">
                </div>
                <div class="col-sm-1">
                    <label for="validationDefault03" class="form-label">Duration</label>
                    <input type="text" class="form-control" placeholder='min.'>
                </div>
                <div class="col-sm-1">
                    <label for="validationDefault04" class="form-label">(mon.)</label>
                    <input type="text" class="form-control" placeholder='max.'>
                </div> -->
                <div class="col-sm-auto submitbtn mx-4 mt-1">
                    <router-link :to="{ name: 'Search', params: {searchKeywords}}">
                        <button type="submit" class="btn btn-outline-dark btn-lg mx-4 mt-3">Search</button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'SearchBar',
    data() {
        return {
            project: {
                id: "",
                projectName: "",
                discription: "",
                enabled: false,
                providerId: "",
                keywords: [],
            },
            projects:"",
            searchKeywords:"",
        }
    },
    methods: {
    }
})
</script>

<style>
.sb-form{
    background-color:#547560;
    font-weight: light;
    color: white;
}
</style>