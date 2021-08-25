import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from "../components/TodoList";
import TodoDetail from "../components/TodoDetail";
import TodoConfig from "../components/TodoConfig";

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
    props: true
  },
  {
    path: '/detail',
    name: 'TodoDetail',
    component: TodoDetail
  },
  {
    path: '/config',
    name: 'TodoConfig',
    component: TodoConfig,
    props: true
  },
  // {
  //   path: '/config/:id',
  //   name: 'TodoConfig',
  //   component: TodoConfig
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
