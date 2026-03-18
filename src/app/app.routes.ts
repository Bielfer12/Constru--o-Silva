import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'sobre-nos', loadComponent: () => import('./pages/sobre-nos/sobre-nos.component').then(c => c.SobreNosComponent) },
  { path: 'produtos', loadComponent: () => import('./pages/produtos/produtos.component').then(c => c.ProdutosComponent) },
  { path: 'contato', loadComponent: () => import('./pages/contato/contato.component').then(c => c.ContatoComponent) },
  { path: '**', redirectTo: '' }
];
