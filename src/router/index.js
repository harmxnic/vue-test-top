import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";
import TodoConfig from "../components/TodoConfig";

const routes = [
  {
    path: '/',
    name: 'list',
    component: TodoList,
    props: true
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: TodoDetail
  },
  {
    path: '/config',
    name: 'config',
    component: TodoConfig
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
