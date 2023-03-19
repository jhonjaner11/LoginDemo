// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DashHeader.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
      },
      {
        path: 'stock-new',
        name: 'CrearStock',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/NewStock.vue'),
      },
      {
        path: 'stock-list',
        name: 'ListaStock',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/StockView.vue'),
      },
      {
        path: 'product-list',
        name: 'ListaProductos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductView.vue'),
      },
      {
        path: 'product-new',
        name: 'CrearProductos',
        component: () => import('@/components/NewProduct.vue'),
      },
      {
        path: 'provedor-new',
        name: 'CrearProvedor',
        component: () => import('@/components/NewProvedor.vue'),
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/AboutView.vue'),
      },
      {
        path: 'users',
        name: 'Usuarios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/UserView.vue'),
      },
      {
        //ventas
        path: 'sales',
        name: 'Ventas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SaleView.vue'),
      },
      {
        //ventas detalle
        path: 'sale-detail',
        name: 'VentaDetalle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/SaleDetail.vue'),
      },

      {
        //ventas
        path: 'sale-record',
        name: 'RegistrarVenta',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/SaleRecord.vue'),
      },

      {
        //provedores
        path: 'provedor-list',
        name: 'ProvedorLista',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProvedorView.vue'),
      },

      {
        //ventas
        path: 'reports',
        name: 'Reportes',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ReportsView.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '@/views/LoginView.vue'),

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
