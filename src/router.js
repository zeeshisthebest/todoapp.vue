import HomeView from './views/Home-View.vue'
import DemoView from './views/Demo-View.vue'
import DemoDetailView from './views/DemoDetail-View.vue'

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
    ,
    {
        path: '/demo/detail',
        name: 'DemoDetailView',
        component: DemoDetailView
    }
]
