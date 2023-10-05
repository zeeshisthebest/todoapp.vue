import HomeView from './views/Home-View.vue'
import DemoView from './views/Demo-View.vue'

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/demo',
        name: 'DemoView',
        component: DemoView
    }
]
