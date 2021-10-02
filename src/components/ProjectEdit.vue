<template>
    <div class="fs-5">
        <form @submit.prevent="onClickSubmitProject">
            <div class="row">
                <div class="col-sm-5">
                    <div class="my-1">
                        <label class="fs-5">Program name:</label> 
                        <input type="text"
                            maxlength="80"
                            class="form-control form-control-sm"
                            style="min-width: 100%"
                            v-model="project.projectName">
                    </div>
                    <div class="border-top my-4 pt-3">
                        <label class="fs-5">Fields/Keywords:</label>
                        <ul class="mt-1">
                            <todo-item 
                                v-for="(keyword, index) in project.keywords"
                                v-bind:key="keyword.index"
                                v-bind:value="keyword"
                                v-on:delete="deleteTodo(project.keywords, index)">
                            </todo-item>
                        </ul>
                        <div class="controls pb-4 border-bottom">
                            <input type="text" placeholder="Add keywords help student find program, maximum three words" 
                                class="form-control form-control-sm mb-2"
                                maxlength="40"
                                style="min-width: 50%"
                                v-model="newKeyword" 
                                @keyup.enter="addTodo(newKeyword, project.keywords)" 
                                autofocus>
                            <div class="text-end">
                                <span type=button class="btn-sm btn-first ms-2" v-on:click="addTodo(newKeyword, project.keywords)">Add</span>
                                <span type=button class="btn-sm btn-first ms-2" v-on:click="clearTodos(project.keywords)">Clear</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="ps-4">
                        <div class="">Courses:
                            <span class="text-end">
                                <span type="button" class="btn-sm btn-first ms-2" data-bs-toggle="modal" data-bs-target="#courseNameModal">Add course</span>
                            </span>
                        </div>
                        <ul class="mt-1">
                            <todo-item 
                                v-for="(course, index) in project.courses"
                                v-bind:key="course.index"
                                v-bind:value="course.courseName"
                                v-on:delete="deleteTodo(project.courses, index)">
                            </todo-item>
                        </ul>
                        <!-- button for modal -->

                        <p class="fs-6 text-muted">Add courses included in the program, currently course can't be modified after added, but you can delete and add again.</p>
                        <!-- Modal -->
                        <div class="modal fade" id="courseNameModal" tabindex="-1" aria-labelledby="#providerNameModal" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="courseNameModal">Add a course</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <label for="inputCourseName">course name</label>
                                        <input type="courseName" 
                                            v-model="newCourse.courseName" 
                                            class="form-control" id="inputCourseName" aria-describedby="courseName" 
                                            placeholder="Enter name">
                                        <label for="inputCourseDiscription">course discription</label> 
                                        <pre><textarea 
                                            class="form-control" id="inputCourseDiscription" 
                                            rows="3"
                                            v-model="newCourse.discription">
                                        </textarea></pre>
                                        <small id="courseNameHelp" class="form-text text-muted"></small>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" @click="addTodo(newCourse, project.courses)" class="btn btn-primary">Add Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- <div class="col-sm">
                    <div class="background-project font-title2 fs-3 text-center py-5">
                        <p>Tell Student</p>
                        <p>what and how you teach</p>
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="">
                    <label for="discription">Discription</label> 
                    <pre><textarea name="discription"
                        class="form-control"
                        style='min-width: 100%'
                        rows=7  
                        placeholder="" 
                        @keyup='charCount(project.discription, 550)'
                        maxlength="550"
                        v-model="project.discription">
                    </textarea></pre>
                    <!-- <p class="text-end">{{ remaincharactersText }}</p> -->
                </div>
            </div>
            <div class="row">
                <div>
                    <input type="checkbox" name="enabled" id="checkbox" v-model="project.enabled">
                    <label for="enabled" class="ms-2 fs-6">click to activate program, Anyone can apply for the program after you activate it.</label>
                </div>
            </div>
            <div class="row my-3">
                <div class="text-center">
                    <button class="btn btn-outline-dark btn-lg mt-2">Submit</button>
                </div>
            </div>
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
                courses:[]
            },
            newKeyword:"",
            newCourse:{
                courseName:"",
                discription:""
            }
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
                    courses: this.project.courses,
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
            keywords:[],
            courses: []
        },
        this.newKeyword=""
    }
})
</script>
<style>
.background-project{
    background-image: url("../assets/project-edit.png");
    background-position:center; 
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>