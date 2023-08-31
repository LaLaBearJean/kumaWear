import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Backend/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Backend/DashBoard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/Backend/ProductsView.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/Backend/OrdersView.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/Backend/CouponsView.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Frontend/UserBoard.vue'),
    children: [
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('../views/Frontend/UserProductList.vue')
      },
      {
        path: 'product/:productId',
        name: 'product',
        component: () => import('../views/Frontend/UserProduct.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/Frontend/UserCart.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/Frontend/UserCheckout.vue')
      },
      {
        path: 'orderprocessed',
        name: 'orderprocessed',
        component: () => import('../views/Frontend/UserOrderProcessed.vue')
      },
      {
        path: 'wishlist',
        name: 'wishlist',
        component: () => import('../views/Frontend/UserWishList.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Frontend/SearchProduct.vue'),
        props: (route) => {
          return {
            id: route.query.q
          }
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router
