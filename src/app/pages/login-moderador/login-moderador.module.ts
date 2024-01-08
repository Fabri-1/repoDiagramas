import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginModeradorPageRoutingModule } from './login-moderador-routing.module';

import { LoginModeradorPage } from './login-moderador.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginModeradorPageRoutingModule,
    SharedModule
  ],
  declarations: [LoginModeradorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModeradorPageModule {}
