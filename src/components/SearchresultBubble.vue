<template>
    <div class="card w-85 border">
        <div @click="showProject" class="">
            <h5 class="card-title">{{project.projectName}}</h5>
            <h6 class="card-title">{{project.providerName}}</h6>
            <p class="card-text">{{project.discription}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "SearchresultBubble",
    props:['project'],
    methods: {
        showProject(){
            this.$emit('onClickCurrentProject', this.project),
            console.log('emit current project down '+this.project.projectName)
        }
    }
})
</script>

<style>
.rl-search{
    color: black
}
</style>