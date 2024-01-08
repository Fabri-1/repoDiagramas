import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router
  ) { }

  async presentLoading(opts: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }

  async dismissLoading(){
    return await this.loadingController.dismiss();
  }

  setElementInLocalstorage(key: string, element: any){
    return localStorage.setItem(key, JSON.stringify(element))
  }

  getElementFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key));
  }

  routerLink(url: string){
    return this.router.navigateByUrl(url)
  }
}
