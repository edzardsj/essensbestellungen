import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Essen',
    loadComponent: () => import('@workspace/login').then((mod) => mod.View),
  },
  {
    path: 'overview',
    loadComponent: () => import('@workspace/user-overview').then((mod) => mod.ViewOverview),
    title: 'Essen',
  },
  {
    path: 'new-order',
    loadComponent: () => import('@workspace/user-order').then((mod) => mod.ViewNewOrder),
    title: 'Essen | Neu',
  },
  {
    path: 'history/:userId',
    loadComponent: () => import('@workspace/user-order').then((mod) => mod.ViewOrderHistory),
    title: 'Essen | Verlauf',
  },
  {
    path: 'admin',
    loadComponent: () => import('@workspace/admin-overview').then((mod) => mod.ViewOverview),
    title: 'Essen | Admin',
  },
  {
    path: 'history',
    loadComponent: () => import('@workspace/shop').then((mod) => mod.ViewShopOrderSummary),
    title: 'Essen | Admin',
  },
  {
    path: 'shop-order-summary/:shopOrderId',
    loadComponent: () => import('@workspace/shop').then((mod) => mod.ViewShopOrderSummary),
    title: 'Essen | Admin',
  },
  {
    path: 'create-shop-order/:shopId',
    loadComponent: () => import('@workspace/shop').then((mod) => mod.ViewNewShopOrder),
    title: 'Essen | Admin',
  },
  {
    path: 'edit-shop/:shopId',
    loadComponent: () => import('@workspace/shop').then((mod) => mod.ViewEditShop),
    title: 'Essen | Admin',
  },
  {
    path: 'add-shop',
    loadComponent: () => import('@workspace/shop').then((mod) => mod.ViewEditShop),
    title: 'Essen | Admin',
  },
];
