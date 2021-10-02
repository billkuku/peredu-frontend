<template>
    <div class="background-searchbar py-5 mb-3">
        <div class="text-center slogan mt-4">
            Make education and knowledge meaningful
        </div>
        <div class="background-form">
            <form @submit.prevent="onClickSubmitSearch" class="row gx-1 py-5 text-center justify-content-center">
                <div class="col-sm-6 mx-5">
                    <label for="validationDefault01" class="form-label fs-6">Find a Program/Supplier</label>
                    <input type="text" class="form-control col-sm-6" placeholder='Enter school or program name'
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
                <div class="col-sm-1 mx-5 mt-1">
                    <router-link :to="{ name: 'Search', params: {searchKeywords}}">
                        <button type="submit" class="btn btn-outline-dark btn-lg mx-4 mt-3 search-btn">Search</button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data(){
        return {
            searchKeywords:""
        }
    }
})
</script>

<style>
.background-searchbar {
  background-image: url("../assets/searchbar-background.png");
  background-position:center; 
  background-size: 100% 100%;
}
.background-form{
    text-align: center;
}
.background-form::before{
    background-color: white;
    filter: opacity(90%);
    opacity: 0.9;
}
</style>