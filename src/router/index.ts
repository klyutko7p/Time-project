import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Timer from '../pages/Timer.vue'
import Stopwatch from '../pages/Stopwatch.vue'
import Clock from '../pages/Clock.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/timer',
    name: 'timer',
    component: Timer
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: Stopwatch
  },
  {
    path: '/clock',
    name: 'clock',
    component: Clock
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
