import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Admin } from '../models/admin.model';
import { Firestore} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
  ) { }

  login(admin: Admin){
    return this.auth.signInWithEmailAndPassword(admin.email, admin.password)
  }
  
}
