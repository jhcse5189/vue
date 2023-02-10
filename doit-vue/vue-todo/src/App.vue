<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    /*
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList": TodoList,
    "TodoFooter": TodoFooter,
    */
    //components: { TodoHeader, TodoList, TodoInput, TodoFooter },

  data() {
    return {
      todoItems: [],
    }
  },

  methods: {
    addTodo(todoItem) {
      // add data to localStorage
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },

    removeTodo(todoItem, index) {
      //console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },

    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  created() {
    //console.log(localStorage.length);
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },

  components: {
    TodoHeader, TodoList, TodoInput, TodoFooter
  }
  /*
  components: {
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList": TodoList,
    "TodoFooter": TodoFooter,
  }*/
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
  }
</style>
