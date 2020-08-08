<template>

  <div id="app">
    <Addtodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>

</template>

<script>
import Addtodo from '../components/AddTodo.vue'
import Todos from '../components/Todos'

export default {
    name: 'Home',
    components: {
        Addtodo,
        Todos
    },
    data() {
        return {
            todos: [],
            id: 0
        }
    },
    methods: {
        deleteTodo(uid) {
            console.log('delete ',uid)

            
            
            let low = 0
            let hi = this.todos.length -1
            let found = false

            while(low <= hi && !found){
                var mid = Math.floor((low + hi)/2) 
                
                if(uid === this.todos[mid].id){
                    found = true
                }
                else if(uid < this.todos[mid].id) {
                    hi = mid - 1
                }
                else if(uid > this.todos[mid].id){
                    low = mid + 1
                }
            }

            this.todos.splice(mid, 1);  
            
            
        },
        
        addTodo(newTodo) {
            const new_todo = {
                id: this.todos.length + 1,
                title: newTodo.title,
                completed: newTodo.completed
            }
            this.todos.push(new_todo)

            // console.log(">>>>")
            // this.todos.forEach(todo => {
            //     console.log(todo.id)
            // });
        },

    



    }
}
</script>

<style>

</style>