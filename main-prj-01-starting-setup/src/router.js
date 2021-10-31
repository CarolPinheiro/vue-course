import { createRouter, createWebHistory } from 'vue-router'
import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachList from './pages/coaches/CoachList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    { path: '/coaches/:id', component: CoachDetails, children: { path: 'contact', component: ContactCoach } },
    { path: '/register', component: CoachRegister },
    { path: '/request', component: RequestReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ]
})

export default router