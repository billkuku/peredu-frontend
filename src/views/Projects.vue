<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 mt-5">
                <div class="nav nav-pills" role="tablist">
                    <router-link to="/projects/list" class="dropdown-item my-2 border-top fs-5">Programs</router-link>
                    <router-link to="/projects/list" class="dropdown-item my-2 border-top fs-5">Course</router-link>
                    <router-link to="/projects/archive" class="dropdown-item my-2 border-top fs-5">Archieved</router-link>
                </div>
            </div>
            <div class="col-sm mt-5">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                </router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Projects",
    components: {
    }
})
</script>

<style>


</style>