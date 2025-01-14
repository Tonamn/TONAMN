import {createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // This is bad practice
        { path: '/', component: App}
    ] 
}); 

const app = createApp(App)
app.use(router)
app.mount('#app')
