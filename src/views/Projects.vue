<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-2 mt-5">
                <n-menu :options="options" style="width: 180px;" default-value="1" />
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
import { defineComponent, h } from 'vue'
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
                        to: {
                            name: 'Projectlist'
                        }
                        },
                        { default: () => 'MyPrograms' }
                    ),
                    key: 'programs',
                },
               {
                    label: () =>
                    h(
                        RouterLink,
                        {
                        to: {
                            path: '/projects/archive'
                        }
                        },
                        { default: () => 'Archive' }
                    ),
                    key: 'archives',
                }
            ]
        }
    },
    name: "Projects",
})
</script>

<style>


</style>