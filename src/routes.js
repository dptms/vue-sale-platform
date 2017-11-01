import VueRouter from 'vue-router'

import PagesIndex from './pages/Index'

const routes = [
    {
        path: '/',
        component: PagesIndex
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router