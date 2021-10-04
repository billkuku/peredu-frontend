<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 mt-5">
                <div class="nav nav-pills"  role="tablist">
                    <router-link to="/account/profile" class="dropdown-item my-2 border-top fs-5">Profile</router-link>
                    <router-link to="/account/roadmap" class="dropdown-item my-2 border-top fs-5" disabled>History</router-link>
                </div>
            </div>
            <div class="col-sm-9 mt-5 ms-5">
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
import  { defineComponent } from 'vue'
export default defineComponent({
    name: "Account",
    components: {
    }
})
</script>

<style>
.navside{
    padding-left: 20px;
}

.ctx-edit {
    margin-top: 50px;
    padding-left: 150px;
}
</style>