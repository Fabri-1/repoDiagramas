import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-principal',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'mapa2',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'login-moderador',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'menu-moderador',
    pathMatch: 'full'
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then(m => m.MapaPageModule)
  },
  {
    path: 'mapa2',
    loadChildren: () => import('./pages/mapa2/mapa2.module').then( m => m.Mapa2PageModule)
  },
  {
    path: 'login-moderador',
    loadChildren: () => import('./pages/login-moderador/login-moderador.module').then( m => m.LoginModeradorPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'menu-moderador',
    loadChildren: () => import('./pages/menu-moderador/menu-moderador.module').then( m => m.MenuModeradorPageModule)
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
