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
                newTodo = '';
            } else {
                todos.push(newTodo);
                console.log(todos);
                newTodo = {};

            }

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
