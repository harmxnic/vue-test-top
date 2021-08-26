<template>
  <div class="container">
    <router-link class="back" to="/">Назад</router-link>
    <div class="todo" v-for="todo in currentTodo">
      <div>{{todo.title}}</div>
      <div>{{todo.deadline}} - <span>дата дедлайна</span></div>
      <div>{{todo.dateOfCreation}} - <span>дата создания</span></div>
      <div>{{todo.text}}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TodoDetail",
  computed: {
    ...mapState([
       'todoList'
    ]),
    currentTodo() {
      return this.todoList.filter(el => el.id === +this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.back {
  font-size: 28px;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 50px;
  font-size: 24px;
  span {
    font-weight: 600;
  }
}
</style>