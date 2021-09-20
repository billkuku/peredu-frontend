export default {
    data() {
        return {
            
        }
    },
    methods: {
        addTodo(newTodo, todos) {
            if (!newTodo.trim()) return;
            todos.push(newTodo);
            newTodo = '';
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
