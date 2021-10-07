<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 mt-3 text-end">
                <div class="">
                    <h3 style="font-family: Consolas">{{providerName}}</h3>
                </div>
                <div class="">
                    <nav class="navbar navbar-light bg-light">
                        <div class="nav-item">
                            <router-link to="/scho/overview" class="nav-link active" aria-current="page" href="#">Overview</router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/scho/programs" class="nav-link" href="#">Programs</router-link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Organization',
    data(){
        return {
            providerName: this.$route.params.providername
        }
    }

})
</script>
