import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/login/Login";
const Index = () => import('../views/index/Index')
const Module1Page1 = () => import('../views/module1/Module1Page1')
const Module1Page2 = () => import('../views/module1/Module1Page2')
const Module2Page1 = () => import('../views/module2/Module2Page1')
const Module2Page2 = () => import('../views/module2/Module2Page2')

const Module3Page1 = () => import('../views/module3/Module3Page1')
const Module3Page2 = () => import('../views/module3/Module3Page2')

const Module4Page1 = () => import('../views/module4/Module4Page1')
const Module4Page2 = () => import('../views/module4/Module4Page2')

const Module5Page1 = () => import('../views/module5/Module5Page1')
const Module5Page2 = () => import('../views/module5/Module5Page2')

const Test = () => import('../views/module1/Test')
const Test2 = () => import('../views/module1/Test2')
const Module2Test1 = () => import('../views/module2/Module2Test1')
const Module2Test2 = () => import('../views/module2/Module2Test2')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'login',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        path: '/index/module1page1',
        component: Module1Page1
      },
      {
        path: '/index/module1page2',
        component: Module1Page2
      },
      {
        path: '/index/module2page1',
        component: Module2Page1
      },
      {
        path: '/index/module2page2',
        component: Module2Page2
      },
      {
        path: '/index/module3page1',
        component: Module3Page1
      },
      {
        path: '/index/module3page2',
        component: Module3Page2
      },
      {
        path: '/index/module4page1',
        component: Module4Page1
      },
      {
        path: '/index/module4page2',
        component: Module4Page2
      },
      {
        path: '/index/module5page1',
        component: Module5Page1
      },
      {
        path: '/index/module5page2',
        component: Module5Page2
      },
      {
        path: '/index/test1',
        component: Test
      },
      {
        path: '/index/test2',
        component: Test2
      },
      {
        path: '/index/module2test1',
        component: Module2Test1
      },
      {
        path: '/index/module2test2',
        component: Module2Test2
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
