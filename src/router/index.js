import { createRouter, createWebHistory } from 'vue-router'
import Coaches from '../views/Coaches.vue'
//import About from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'Home', 
    redirect:'/coaches', 
    component: null
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component:Coaches,
      children:[
        {
        path :'contact',
        component:null
      }
        ]
  },
  {
    path: '/coaches/:id',
    name: 'coaches',
    component:null},
  {
    path: '/register',
    name: 'register',
    component:null
  },
  {
    path: '/requests',
    name: 'requests',
    component:null
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
