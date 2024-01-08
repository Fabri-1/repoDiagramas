import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { VehiclesService } from '../../services/vehicles.service';
import vehicle from 'src/app/models/vehicle.interface';

@Component({
  selector: 'app-menu-moderador',
  templateUrl: './menu-moderador.page.html',
  styleUrls: ['./menu-moderador.page.scss'],
})
export class MenuModeradorPage implements OnInit {

  vehicle: vehicle[];
  myControl = new FormControl();
  formulario: FormGroup;
  patente: string;
  marca: string;

  constructor(
    public navCtrl: NavController,
    private VehiclesService: VehiclesService,
    private alertController: AlertController
  ) {
    this.formulario = new FormGroup({
      license: new FormControl(),
      model: new FormControl()
    })
   }

  ngOnInit(): void {
    this.VehiclesService.getVehicle().subscribe(places => {
      this.vehicle = places;
    })
  }

  //addVehicle(): void{
  //  const firebaseApp = getApp();
  //   const db = getFirestore(firebaseApp);
  //
  //  const vehicleCollection = collection(db, 'vehicle');
  //
  //  addDoc(vehicleCollection, this.form.value);
  //}

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.VehiclesService.addVehicle(this.formulario.value);
    console.log(response)
  }

  async onClickDelete(vehicle: vehicle) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: `¿Seguro que desea eliminar el vehículo con patente ${vehicle.license}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            const response = await this.VehiclesService.deleteVehicle(vehicle);
            console.log(response);
          },
        },
      ],
    });
  
    await alert.present();
  }

}
