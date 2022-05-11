import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
    { path: '/about', name: 'About', component: () => import('./views/About.vue') },
  ],
})

createApp(App).use(router).mount('#app');
