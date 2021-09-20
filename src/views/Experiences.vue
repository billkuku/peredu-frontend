<template>
    <div class="container">
        <div class="row">
            <div class="mt-5 col-sm-12">
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
    name: "Experiences",
    components: {
    }
})
</script>

<style>


</style>