<template>
<div>
    <form @submit.prevent="onClickSubmitProject">
        <table class="table mt-1">  
            <tbody>
                <tr>
                    <td class="text-start" style="width: 60%">
                        <label>Program name:</label> 
                        <input type="text"
                            maxlength="80" 
                            style="min-width: 100%"
                            v-model="project.projectName">
                    </td>
                    <td class="text-center border pt-4">
                        <input type="checkbox" name="enabled" id="checkbox" 
                            v-model="project.enabled">
                        <label for="enabled" class="">click to activate project</label>
                    </td>
                </tr>
                <tr>
                    <td class="text-start">
                        <label for="discription">Discription</label> 
                        <pre><textarea name="discription"
                            style='min-width: 100%'
                            rows=7  
                            placeholder="" 
                            @keyup='charCount(project.discription, 550)'
                            maxlength="550" 
                            v-model="project.discription">
                        </textarea></pre>
                        <p class="text-end">{{ remaincharactersText }}</p>
                    </td>
                    <td class="text-start">
                        <label for="keyword" class="ps-4">Fields/Keywords:</label>
                        <div class="controls ps-4">
                        <input type="text" placeholder="single word recommended" 
                            v-model="newKeyword" 
                            @keyup.enter="addTodo(newKeyword, project.keywords)" 
                            autofocus>
                        <span class="btn-sm btn-secondary ms-2" v-on:click="addTodo(newKeyword, project.keywords)">Add</span>
                        <span class="btn-sm btn-secondary ms-2" v-on:click="clearTodos(project.keywords)">Clear</span>
                        </div>
                        <ul>
                            <todo-item v-for="(keyword, index) in project.keywords"
                                v-bind:key="keyword.index"
                                v-bind:value="keyword"
                                v-on:delete="deleteTodo(project.keywords, index)">
                            </todo-item>
                        </ul>
                    </td>
                </tr>
                <tr><td><p type="button" class="btn btn-secondary py-1 my-0" aria-disabled="">click add more criterien</p></td></tr>
            </tbody>
            
        </table>
        <button class="btn btn-outline-dark mt-2">Submit</button>
    </form>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TodoItem from '../components/TodoItem.vue'
import MixinTextarea from '../mixins/TextareaCounter'
import MixinTodo from '../mixins/TodoEdit'
import axios from 'axios'

export default defineComponent({
    name: 'Projectedit',
    components: {
        TodoItem
    },
    mixins: [MixinTextarea, MixinTodo],
    data() {
        return {
            currentUrl:"",
            project: {
                id: "",
                projectName: "",
                discription: "",
                enabled: false,
                providerId: "",
                keywords: [],
            },
            newKeyword:"",
        }
    },
    methods: {
        onClickSubmitProject() {
            axios({
                method: "post",
                url: '/api/projects/edit/'+this.project.id,
                data: {
                    id: this.project.id,
                    projectName: this.project.projectName,
                    discription: this.project.discription,
                    enabled: this.project.enabled,
                    providerId: this.project.providerId,
                    keywords: this.project.keywords,
                }
            })
            .then(response => {
                alert(response.data), 
                this.$router.replace({
                    path: '/projects'}),
                console.log(response.data)
                })
        },
        getProject() {
            if(this.$route.params.id!) {
                this.project.id = this.$route.params.id.toString(),
                axios.get("/api/projects/edit/"+this.project.id)
                .then(response => {
                    this.project = response.data,
                    console.log(this.project)
                })
            }
        },
    },
    activated: function() {
        this.getProject()
    },
    beforeRouteLeave(){
        this.project = {
            id: "",
            projectName: "",
            discription: "",
            enabled: false,
            providerId: "",
            keywords:[]
        }
    },
})

</script>