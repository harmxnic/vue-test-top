import {createStore} from 'vuex'

let date = new Date()

export default createStore({
    state: {
        todoList: [
            {id: 2, title: 'todo2', deadline: new Date('09.25.2021'), dateOfCreation: date, text: 'Рандомный текс2'},
            {id: 4, title: 'todo4', deadline: new Date('02.07.2022'), dateOfCreation: date, text: 'Рандомный текс4'},
            {id: 1, title: 'todo1', deadline: new Date('08.26.2021'), dateOfCreation: date, text: 'Рандомный текс1'},
            {id: 3, title: 'todo3', deadline: new Date('11.12.2021'), dateOfCreation: date, text: 'Рандомный текс3'}
        ],
        inputTitle: '',
        inputDeadline: '',
        inputText: '',
        inputSearch: '',
        isModal: false,
        currentTodoId: null,
        selectedOption: '',
        todoToEdit: [],
        isEditing: false
    },
    getters: {

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
            if (state.isEditing) {
                state.todoList = state.todoList.filter(el => el.id !== state.currentTodoId)
                state.todoList.unshift({
                    id: state.currentTodoId,
                    title: state.inputTitle,
                    deadline: state.inputDeadline,
                    dateOfCreation: new Date(),
                    text: state.inputText
                })
            } else {
                state.todoList.unshift({
                    id: Date.now(),
                    title: state.inputTitle,
                    deadline: state.inputDeadline,
                    dateOfCreation: new Date(),
                    text: state.inputText
                })
            }
            state.inputTitle = ''
            state.inputDeadline = ''
            state.inputText = ''
            state.currentTodoId = null
            state.isEditing = false
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
            state.currentTodoId = null
        },
        deleteTodo(state) {
            state.todoList = state.todoList.filter(el => el.id !== state.currentTodoId)
            state.currentTodoId = null
        },
        editTodo(state, currentTodoId) {
            state.todoToEdit = state.todoList.filter(el => el.id === currentTodoId)
            state.currentTodoId = currentTodoId
            state.isEditing = true
            state.inputTitle = state.todoToEdit[0].title
            state.inputDeadline = state.todoToEdit[0].deadline
            state.inputText = state.todoToEdit[0].text
        },
        showCurrentTodo(state, id) {
            state.todoList = state.todoList.filter(el => el.id === +id)
        }
    },
    actions: {
        updateList(context) {
            context.commit('updateList')
        }
    },
    modules: {}
})
