import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/components/1_FirstPage/HomeView.vue";
import IndexPage from "@/components/1_FirstPage/IndexPage.vue";
import UserPage from "@/components/2_UserPage/UserPage.vue";
import HomeworkView from "@/components/2_UserPage/HomeworkView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
      children:[
        {
          path: "homework",
          name: "homework",
          component: HomeworkView,
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
