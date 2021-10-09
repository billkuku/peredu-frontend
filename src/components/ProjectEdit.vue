<template>
    <div class="fs-6">
        <form @submit.prevent="onClickSubmitProject">
            <div class="row">
                <div class="col-sm-5">
                    <div class="">
                        <label class="">Program name<span class="text-danger">*</span>:</label> 
                        <input type="text"
                            maxlength="80"
                            class="form-control form-control-sm"
                            style="min-width: 100%"
                            v-model="project.projectName" required>
                    </div>
                    <div>
                        <label class="">Location:</label> 
                        <input type="text"
                            maxlength="80"
                            class="form-control form-control-sm"
                            style="min-width: 100%">                        
                    </div>
                    <div>
                        <label class="">Website:</label> 
                        <input type="text"
                            maxlength="80"
                            class="form-control form-control-sm"
                            style="min-width: 100%">                        
                    </div>
                    <div class="">
                        <label class="">Search Keywords:</label>
                        <div class="">
                            <input type="text" placeholder="" 
                                class="form-control form-control-sm mb-2"
                                maxlength="40"
                                style="min-width: 50%"
                                v-model="newKeyword" 
                                @keyup.enter="addTodo(newKeyword, project.keywords)" 
                                autofocus>
                            <div class="text-end">
                                <span>                                
                                    <todo-item  class="mt-2"
                                        v-for="(keyword, index) in project.keywords"
                                        v-bind:key="keyword.index"
                                        v-bind:value="keyword"
                                        v-on:delete="deleteTodo(project.keywords, index)">
                                    </todo-item>
                                </span>
                                <span type=button class="btn-sm btn-first ms-2" v-on:click="addTodo(newKeyword, project.keywords)">Add</span>
                                <span type=button class="btn-sm btn-first ms-2" v-on:click="clearTodos(project.keywords)">Clear</span>
                            </div>                           
                        </div>
                    </div>
                    <div class="mt-2">
                        <div class="">Included Courses:
                            <span class="d-flex justify-content-end">
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

                        <!-- <p class="text-muted">Add courses included in the program, currently course can't be modified after added, but you can delete and add again.</p> -->
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
                                        <input type="text"
                                            v-model="newCourse.courseName" 
                                            class="form-control" id="inputCourseName" aria-describedby="courseName" 
                                            placeholder="Enter name">
                                        <label for="inputCourseDiscription">course discription</label> 
                                        <pre><textarea 
                                            class="form-control" id="inputCourseDiscription" 
                                            rows="3"
                                            v-model="newCourse.discription"
                                            >
                                        </textarea></pre>
                                        <small id="courseNameHelp" class="form-text text-muted"></small>
                                    </div>{{newCourse}}
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" @click="addTodo(newCourse, project.courses)" class="btn btn-primary">Add Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="">Tag:</div> 
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
                            <label class="form-check-label" for="flexCheckDefault1">
                                General Education
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                            <label class="form-check-label" for="flexCheckDefault2">
                                Hobbies Training
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                            <label class="form-check-label" for="flexCheckDefault3">
                                Online Training
                            </label>
                        </div>  
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4">
                            <label class="form-check-label" for="flexCheckDefault4">
                                Others
                            </label>
                        </div>  
                    </div>
                </div>
                <div class="col-sm-7">
                    <div class="">
                        <span>
                            <label for="FormControlPhoto1" class="me-5">Upload Photos(.png .jpg)</label><br>
                            <input type="file" class="form-control-file" id="FormControlPhoto1">
                        </span>
                        <span>
                        </span>
                    </div>
                    <div class="mt-1">
                        <span>
                            <label for="FormControlFile1" class="me-5">Upload files(.pdf)</label><br>
                            <input type="file" class="form-control-file" id="FormControlFile1">
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mt-3">
                    <label for="discription">Discription<span class="text-danger">*</span>:</label> 
                    <pre><textarea name="discription"
                        class="form-control"
                        style='min-width: 100%'
                        rows=7  
                        placeholder="" 
                        @keyup='charCount(project.discription, 550)'
                        maxlength="550"
                        v-model="project.discription"
                        required>
                    </textarea></pre>
                    <p class="text-end">{{ remaincharactersText }}</p>
                </div>
            </div>
            <div class="row">
                <div>
                    <input type="checkbox" name="enabled" id="checkbox" v-model="project.enabled">
                    <label for="enabled" class="ms-2">click to activate program, Anyone can apply for the program after you activate it.</label>
                </div>
            </div>
            <div class="row my-3">
                <div class="text-center">
                    <button class="btn btn-outline-dark btn-md mt-2">Submit</button>
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
                    path: '/projects'})
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
    mounted: function() {
        this.getProject()
    },
    beforeRouteLeave: function() {
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