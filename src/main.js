import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter , createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import GameDetails from './components/GameDetails.vue'

const routes = [
    {
        path:'/',
        component:Home,
        alias:'/home'
    },
    {
        path:'/game/:id',
        component:GameDetails,
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes})
//createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

