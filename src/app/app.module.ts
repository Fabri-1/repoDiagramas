import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MenuModeradorPageModule } from './pages/menu-moderador/menu-moderador.module';
import { LoginModeradorPageModule } from './pages/login-moderador/login-moderador.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MenuModeradorPageModule,
    LoginModeradorPageModule,
    provideFirebaseApp(() => initializeApp({"projectId":"test-9bd11","appId":"1:1055567526688:web:e810661e102b7b37d97545","databaseURL":"https://test-9bd11-default-rtdb.firebaseio.com","storageBucket":"test-9bd11.appspot.com","apiKey":"AIzaSyD2VNAyBLfv7wX_QXJ4P6bvgTY07vcBsoA","authDomain":"test-9bd11.firebaseapp.com","messagingSenderId":"1055567526688","measurementId":"G-RVGHJ2G8KB"})),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
