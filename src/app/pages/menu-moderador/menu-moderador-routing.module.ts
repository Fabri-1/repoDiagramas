import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuModeradorPage } from './menu-moderador.page';

const routes: Routes = [
  {
    path: '',
    component: MenuModeradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuModeradorPageRoutingModule {}
