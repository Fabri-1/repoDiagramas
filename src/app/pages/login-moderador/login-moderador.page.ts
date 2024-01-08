import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Admin } from 'src/app/models/admin.model';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-login-moderador',
  templateUrl: './login-moderador.page.html',
  styleUrls: ['./login-moderador.page.scss'],
})
export class LoginModeradorPage implements OnInit {


  constructor(
    private toastController: ToastController,
    private firebaseSvc: FirebaseService,
    private utilSvc: UtilsService
 ) {}

  @Input() control: FormControl;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() autocomplete: string;
  
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl( '', [Validators.required])
  })

  ngOnInit() {
  }

  submit(){
    if(this.form.valid){
      this.firebaseSvc.login(this.form.value as Admin).then(async res=>{
        console.log(res);

        let Admin: Admin = {
          uid: res.user.uid,
          email: res.user.email, 
        }
        this.utilSvc.setElementInLocalstorage('admin', Admin)
        this.utilSvc.routerLink('/menu-moderador')
      }, error =>{
        console.log(error);
        this.utilSvc.dismissLoading();  
      })
    }
  }

  async mostrarMensaje() {
    const toast = await this.toastController.create({
      message: 'Si se te han olvidado los datos, contacta con el desarrollador por correo.',
      duration: 3100, 
      position: 'bottom',
    });
    await toast.present();
  }

}
