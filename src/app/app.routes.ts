import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Trinexus Technologies — Custom Web, Apps & Software Solutions in Chittagong',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Our Services — Trinexus Technologies',
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    title: 'Ready-made Systems — Trinexus Technologies',
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent),
    title: 'Pricing — Trinexus Technologies',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us — Trinexus Technologies',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us — Trinexus Technologies',
  },
  { path: '**', redirectTo: '' },
];
