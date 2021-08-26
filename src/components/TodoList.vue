<template>
  <div class="container">
    <div class="search">
      <input
          type="text"
          class="search__title"
          placeholder="Поиск по названию"
          :value="inputSearch"
          @input="updateSearch"
      >
      <select
          class="search__filters"
          :value="selectedOption"
          @change="updateSelectedOption"
      >
        <option value="" disabled>Сортировать по...</option>
        <option value="deadline">Дате дедлайна</option>
        <option value="dateOfCreation">Дате изменения</option>
      </select>
    </div>
    <table class="table">
      <tr class="table__row">
        <th class="table__head">Название</th>
        <th class="table__head">Дата дедлайна</th>
        <th class="table__head">Дата изменения</th>
      </tr>
      <tr class="table__row" v-for="todo in sortedListByTitle" :key="todo.id">
        <td class="table__col">{{todo.title}}</td>
        <td class="table__col">{{todo.deadline}}</td>
        <td class="table__col">{{todo.dateOfCreation}}</td>
        <td class="table__col table__col-delete" @click="showModal(todo.id)">Удалить</td>
        <td class="table__col table__col-edit" @click="editTodo(todo.id)">Редактировать</td>
        <td class="table__col table__col-more" @click="this.$router.push({ name: 'detail', params: {id: todo.id}})">Подробнее</td>
      </tr>
    </table>
  </div>
  <div class="pop-up" v-if="isModal">
    <div class="pop-up__block">
      <div class="pop-up__title">Вы действительно хотите удалить todo</div>
      <div class="pop-up__btns">
        <button class="pop-up__yes" @click="deleteTodo">Да</button>
        <button class="pop-up__no" @click="hideModal">Нет</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import TodoConfig from "./TodoConfig";

export default {
  name: "TodoList",
  components: {TodoConfig},
  methods: {
    showModal(todoId) {
      this.$store.commit('showModal', todoId)
    },
    hideModal() {
      this.$store.commit('hideModal')
    },
    deleteTodo() {
      this.$store.commit('deleteTodo')
      this.hideModal()
    },
    updateSearch(e) {
      this.$store.commit('updateSearch', e.target.value)
    },
    updateSelectedOption(e) {
      this.$store.commit('updateSelectedOption', e.target.value)
    },
    editTodo(id) {
      this.$store.commit('editTodo', id)
      this.$router.push('/config')
    }
  },
  computed: {
    ...mapState([
        'todoList',
        'isModal',
        'inputSearch',
        'selectedOption'
    ]),
    sortedListByOption() {
      return [...this.todoList].sort((a, b) => {
        return new Date(b[this.selectedOption]) - new Date(a[this.selectedOption])
        //a[this.selectedOption]?.localeCompare(b[this.selectedOption])
      }).reverse()
    },
    sortedListByTitle() {
      return this.sortedListByOption.filter(item => item.title.toLowerCase().includes(this.inputSearch.toLowerCase()))
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>

.search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
  &__title, &__filters {
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid dimgray;
  }
}

.table {
  margin: 0 auto;
  &__row {
    padding: 5px;
  }
  &__head, &__col {
    font-size: 18px;
    line-height: 21px;
    padding: 10px;
  }
  &__col {
    &-delete {
      color: darkred;
      cursor: pointer;
      font-weight: 600;
    }
    &-edit {
      color: darkblue;
      cursor: pointer;
      font-weight: 600;
    }
    &-more {
      color: darkgoldenrod;
      cursor: pointer;
      font-weight: 600;
    }
  }
}

.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(dimgray, .5);
  &__block {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border-radius: 20px;
    width: 500px;
    height: 300px;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      background: transparent;
      padding: 10px;
      width: 100px;
      height: 50px;
      border-radius: 15px;
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
    }
  }
  &__yes {
    border: 2px solid darkgreen;
    color: darkgreen;
  }
  &__no {
    border: 2px solid darkred;
    color: darkred;
  }
}

</style>