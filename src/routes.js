import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require('./pages/Index')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router