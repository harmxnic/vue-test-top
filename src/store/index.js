import { createStore } from 'vuex'

let date = new Date().toLocaleTimeString()

export default createStore({
  state: {
    todoList: [
      {id: 2, title: 'todo2', deadline: '25.09.2021', dateOfCreation: date, text: 'Рандомный текс2'},
      {id: 4, title: 'todo4', deadline: '07.02.2022', dateOfCreation: date, text: 'Рандомный текс4'},
      {id: 1, title: 'todo1', deadline: '26.08.2021', dateOfCreation: date, text: 'Рандомный текс1'},
      {id: 3, title: 'todo3', deadline: '12.11.2021', dateOfCreation: date, text: 'Рандомный текс3'}
    ],
    inputTitle: '',
    inputDeadline: '',
    inputText: '',
    inputSearch: '',
    isModal: false,
    currentTodoId: '',
    selectedOption: ''
  },
  mutations: {
    updateTitle(state, title) {
      state.inputTitle = title
    },
    updateDeadline(state, deadline) {
      state.inputDeadline = deadline
    },
    updateText(state, text) {
      state.inputText = text
    },
    updateList(state) {
      state.todoList.push({
        id: Date.now(),
        title: state.inputTitle,
        deadline: state.inputDeadline,
        dateOfCreation: new Date().toLocaleTimeString(),
        text: state.inputText
      })
      state.inputTitle = ''
      state.inputDeadline = ''
      state.inputText = ''
    },
    updateSearch(state, search) {
      state.inputSearch = search
    },
    updateSelectedOption(state, option) {
      state.selectedOption = option
    },
    showModal(state, currentTodoId) {
      state.isModal = true
      state.currentTodoId = currentTodoId
    },
    hideModal(state) {
      state.isModal = false
    },
    deleteTodo(state) {
      state.todoList = state.todoList.filter(el => el.id !== state.currentTodoId)
    }
  },
  actions: {
  },
  modules: {
  }
})
