import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mapa2PageRoutingModule } from './mapa2-routing.module';

import { Mapa2Page } from './mapa2.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mapa2PageRoutingModule
  ],
  declarations: [Mapa2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Mapa2PageModule {}
