import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import OverviewPage from '../page/OverView.vue'
import TransactionsPage from '../page/TransactionsPage.vue'
import BudgetsPage from '../page/BudgetsPage.vue'
import PotsPage from '../page/PotsPage.vue'
import BillsPage from '../page/BillsPage.vue'

// Define your routes array
const routes = [
  { path: '/', redirect: '/OverView' }, // redirect root to overview page
  { path: '/overview', component: OverviewPage },
  { path: '/transactions', component: TransactionsPage },
  { path: '/budgets', component: BudgetsPage },
 { path: '/pots', component: PotsPage },
  { path: '/recurring', component: BillsPage }
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),  // Uses HTML5 history mode
  routes
})

export default router


