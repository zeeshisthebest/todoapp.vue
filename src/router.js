import HomeView from './views/Home-View.vue'
import ArchiveView from './views/Archive-View.vue'
import LoginView from './views/Login-View.vue'
import RegisterView from './views/Register-View.vue'

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
        path: '/login',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/register',
        name: "RegisterView",
        component: RegisterView,
    }
]
