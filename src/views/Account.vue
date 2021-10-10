<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 mt-5">
                <n-menu class="fs-5" :options="options" style="width: 180px;" default-value="1" />
            </div>
            <div class="col-sm-9 my-5 ms-5">
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
import  { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
    setup () {
        return {
            options: [
                {
                    label: () =>
                    h(
                        RouterLink,
                        {
                            to: { path: '/account/profile' }
                        },
                        { default: () => 'profile' }
                    ),
                    key: 'profile',
                },
                {
                    label: () =>
                    h(
                        RouterLink,
                        {
                            to: { path: '' }
                        },
                        { default: () => 'placeholder' }
                    ),
                    key: 'in dev',
                }
            ]
        }
    },
    name: "Account",
    components: {
    }
})
</script>

<style>

</style>