<template>
    <p class="btn btn-sm todo-item mx-1"
        v-on:click="$emit('delete')">{{this.value}} x
    </p>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'TodoItem',
    props: ['value'],
})
</script>

<style>
.todo-item{
    list-style: none;
    background-color: #9BAF5D;
    color:white;
}
</style>