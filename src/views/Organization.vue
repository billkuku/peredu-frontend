<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div>
                    {{providerName}}
                </div>
                <div class="">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <router-link to="/scho/overview" class="nav-link active" aria-current="page" href="#">Overview</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/scho/programs" class="nav-link" href="#">Programs</router-link>
                        </li>
                    </ul>
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
