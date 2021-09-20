<template>
    <div class="container">
        <h5 class="search-result ms-3 mt-3 mb-1">Search '{{searchKeywords}}' with '{{projects.length}}' results:</h5>
        <div class="row">
            <div class="col-sm-4">
                <div class="nav mb-3">
                    <li class="w-100" v-for="(project, index) in currentProjects" :key="index">
                        <searchresult-bubble 
                            style="height: 150px; overflow: hidden" 
                            class=" border border-gray border-4 rounded p-2" 
                            :project="project" 
                            @onClickCurrentProject="getCurrentProject">
                        </searchresult-bubble>
                    </li>
                    <li>
                        <v-pagination
                            v-model="page"
                            :pages="Math.ceil(projects.length/8)"
                            :range-size="1"
                            active-color="#9BAF5D"
                            @update:modelValue="updateHandler"
                        />
                    </li>
                </div>
            </div>
            <div  v-if="currentProjects.length" class="me-2 col-sm border border-gray border-5">
                <div class="sticky-top pt-3">
                    <project-item :currentProject="currentProject"></project-item>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// document>>> https://github.com/HENNGE/vue3-pagination
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import axios from 'axios';
import SearchresultBubble from "../components/SearchresultBubble.vue"
import ProjectItem from "../components/ProjectItem.vue"

export default defineComponent({
    name: "search",
    components: {
        VPagination,
        SearchresultBubble,
        ProjectItem,
    },
    props: ['searchKeywords'],
    data(){
        return {
            page: 1,
            projects:"",
            currentProjects:"",
            currentProject: {}
        }
    },
    methods:{
        updateHandler(){
            this.currentProjects = this.projects.slice((this.page-1)*8, 8+(this.page-1)*8)
            this.currentProject = this.currentProjects[0]
        },
        getCurrentProject(project: Object){
            this.currentProject = project
        },
        getSearchResult(){
            this.page=1,
            axios({
                method: "post",
                url: '/api/search/result/page',
                params: {
                    inputText: this.searchKeywords,
                }
            })
            .then(response => {
                this.projects = response.data,
                this.currentProjects = this.projects.slice((this.page-1)*8, 8+(this.page-1)*8)
                this.currentProject = this.currentProjects[0]
            })
        }
    },
    watch: {
        searchKeywords(){
            this.getSearchResult()
        }
    },
    beforeMount(){
        if(this.searchKeywords) {
        this.getSearchResult()
        }
    }
})
</script>

<style>
.search-result{
    color: rgb(170, 167, 167)
}
</style>