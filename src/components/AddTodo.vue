<template>
    <div>
        <form @submit.prevent="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add to do ..">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
    
</template>

<script>

export default {
    name: 'Addtodo',
    data() {
        return {
            title: '',
            id : 0
        }
    },
    methods: {
      addTodo() {
          const newTodo = {
              title: this.title,
              completed: false
          }
          // Send up to parent
          this.$emit('add-todo', newTodo);
          //alert(`title: ${newTodo.title} \n completed: ${newTodo.completed}`)
          this.title = '';
      }
    }
}
</script>

<style  scoped>
    form {
        display: block;
    }
    input[type="text"] {
        margin: 10px;
        padding: 10px;
        width: 80%;
    }
    input[type="submit"] {
        padding: 10px;
    }
</style>