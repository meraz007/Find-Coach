import { createRouter, createWebHistory } from 'vue-router'
import Coaches from '../views/Coaches.vue'
import Requests from '../views/Requests.vue'
import Registration from '../components/Coaches/CoachRegistration.vue'
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
    component:Registration
  },
  {
    path: '/requests',
    name: 'requests',
    component:Requests
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
