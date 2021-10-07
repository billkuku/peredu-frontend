<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 mt-3 text-end">
                <div class="">
                    <h3 style="font-family: Consolas">{{providerName}}</h3>
                </div>
                <div class="">
                    <n-menu v-model:value="activeKey" class="fs-6" mode="horizontal" :options="menuOptions" />
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
import { defineComponent, h, ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {path:'/scho/overview'}
        },
        'Overview'
      ),
    key: 'overview',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {path:'/scho/programs'}
        },
        'Programs'
      ),
    key: 'programs',
  }
]

export default defineComponent({
    setup () {
        return {
            activeKey: ref(null),
            menuOptions
        }
    },
    name: 'Organization',
    data(){
        return {
            providerName: this.$route.params.providername
        }
    }

})
</script>
