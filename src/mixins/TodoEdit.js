export default {
    data() {
        return {
            
        }
    },
    methods: {
        addTodo(newTodo, todos) {
            if(typeof newTodo === 'string') {
                if (!newTodo.trim()) return;
                todos.push(newTodo);
            } else {
                todos.push(newTodo);
                console.log(todos);
            }
            newTodo = "";
        },
        addCourse(courseName, courseDiscription, courses){
            if(typeof courseName === 'string') {
                if (!courseName.trim()) return;
                courses.push({courseName, courseDiscription});
            } else {
                courses.push({courseName, courseDiscription});
                console.log(courses);
            }            
            courseName = '';
            courseDiscription = '';
        },
        deleteTodo(todos, index) {
            todos.splice(index, 1);
            console.log(todos)
        },
        clearTodos(todos) {
            if (todos.length < 1) return;
            if (confirm('Want to clear all?')) {
            todos.splice(0, todos.length);
            }
        }

    }
}
