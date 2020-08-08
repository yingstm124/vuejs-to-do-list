<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
        <button v-on:click="$emit('del-todo', todo.id)">X</button>
        <p>
            <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed"/>
            <span>{{todo.title}}</span>
        </p>
    </div>
        
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"],
    data() {
        return {
            pin: '📌',
            pined: '❌'
        }
    },
    methods: {

        markComplete() {
            this.todo.completed = !this.todo.completed
        }

    }

}
</script>

<style scoped>
    
    .todo-item {
        margin: 10px;
        padding: 10px 50px 10px 50px;
        border-bottom: 1px #ccc dotted;
        text-align: center;
    }
    p {
     text-align: left;   
    }
    span{
        padding-left: 8px;
    }
    .is-complete {
        text-decoration: line-through;
    }
    button {
        float: right;
        padding: 2px 10px 2px 10px;
        background-color: crimson;
        color: white;
    }
    button:hover {
        background-color: brown;
    }

</style>