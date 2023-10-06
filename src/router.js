import HomeView from './views/Home-View.vue'
import ArchiveView from './views/Archive-View.vue'
import DemoDetailView from './views/DemoDetail-View.vue'

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/archives',
        name: 'ArchiveView',
        component: ArchiveView
    }
    ,
    {
        path: '/demo/detail',
        name: 'DemoDetailView',
        component: DemoDetailView
    }
]
