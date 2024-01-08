import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import vehicle from '../models/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private firestore: Firestore) { }

  addVehicle(vehicle: vehicle){
    const vehicleRef = collection(this.firestore, 'vehicles');
    return addDoc(vehicleRef, vehicle)
  }

  getVehicle(): Observable<vehicle[]> {
    const vehicleRef = collection(this.firestore, 'vehicles');
    return collectionData(vehicleRef, { idField: 'id' }) as Observable<vehicle[]>;
  }

  deleteVehicle(vehicle: vehicle) {
    const vehicleDocRef = doc(this.firestore, `vehicles/${vehicle.id}`);
    return deleteDoc(vehicleDocRef);
  }
  
  //addVehicle2(Vehicle: Vehicle){
    //codigo original
    //return this.db.collection('vehicles').add({
    //  license: Vehicle.license,
    //  model: Vehicle.model
    //})

    //const vehicleRef = collection(this.firestore, 'vehicle');
    //return addDoc(vehicleRef, Vehicle);
  //}

}
