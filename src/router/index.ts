import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    // component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    components: {
      default: Home,
    }
  },
  {
    path: '/',
    redirect: '/home',
    name: 'Home1'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "home" */ '../views/Dashboard.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "home" */ '../views/About.vue'),
  },
  {
    path: '/usage',
    name: 'Usage',
    component: () => import(/* webpackChunkName: "home" */ '../views/Usage.vue'),
  },
  {
    path: '/account/',
    redirect: '/account/profile',
    name: 'Profile',
    component:() => import(/* webpackChunkName: "projects" */ '../views/Account.vue'),
    children: [
      {
        path: '/account/profile',
        name: 'Profile1',
        component: () => import(/* webpackChunkName: "account" */ '../views/AccountProfile.vue'),
        // meta: {requiresAuth: true},
      }
    ]
  },
  {
    path: '/projects',
    name: 'Projects',
    redirect: '/projects/list',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
    children: [
      {
        path: '/projects/list',
        name: 'Projectlist',
        component: () => import(/* webpackChunkName: "about" */ '../views/Projectlist.vue'),
      },
      {
        path: '/projects/edit',
        name: 'Projectcreate',
        component: () => import(/* webpackChunkName: "about" */ '../views/Projectedit.vue'),
        meta: {requiresAuth: true}
      },
      {
        path: '/projects/edit/:id',
        name: 'Projectedit',
        component: () => import(/* webpackChunkName: "about" */ '../views/Projectedit.vue'),
      },
      {
        path: '/projects/archive',
        name: 'Projectarchive',
        component: () => import(/* webpackChunkName: "about" */ '../views/Projectarchive.vue'),
      }
    ]
  },
  {
    path: '/experiences',
    name: 'Experiences',
    redirect: '/experiences/list',
    component: () => import(/* webpackChunkName: "home" */ '../views/Experiences.vue'),
    children: [
      {
        path: '/experiences/list',
        name: 'Experiencelist',
        component: () => import(/* webpackChunkName: "about" */ '../views/Experiencelist.vue'),
      },
      {
        path: '/experiences/edit',
        name: 'Experiencecreate',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ '../views/Experienceedit.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: '/experiences/edit/:id',
        name: 'Experienceedit',
        component: () => import(/* webpackChunkName: "about" */ '../views/Experienceedit.vue'),
      }
    ]
  },
  {
    path: '/search',
    name: 'Search',
    props: true,
    component: () => import('../views/Search.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
const authStatus = store.getters['auth/user'];
router.beforeEach((to, from, next) => {
  if(to.matched.some(record=>record.meta.requiresAuth)) {
    console.log("111111111111111111111")
    if(!store.getters['auth/user']) {
      console.log("authentication state is: "+authStatus)
      next({
        name: "SignIn"
      });
    } else{
      next();
    }
  } else {
    next();
  }
});

export default router;
