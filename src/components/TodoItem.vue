<template>
    <span type=button class="btn-sm todo-item me-1"
        v-on:click="$emit('delete')">{{this.value}} x
    </span>
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
    background-color: #755469;
    color:white;
}
</style>