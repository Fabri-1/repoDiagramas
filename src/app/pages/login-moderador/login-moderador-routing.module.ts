import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModeradorPage } from './login-moderador.page';

const routes: Routes = [
  {
    path: '',
    component: LoginModeradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginModeradorPageRoutingModule {}
