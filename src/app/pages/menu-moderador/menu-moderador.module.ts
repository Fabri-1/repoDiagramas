import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuModeradorPageRoutingModule } from './menu-moderador-routing.module';

import { MenuModeradorPage } from './menu-moderador.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuModeradorPageRoutingModule,
    SharedModule,
    AngularFirestoreModule
  ],
  declarations: [MenuModeradorPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModeradorPageModule {}
