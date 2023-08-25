import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CreditCard } from '../models/CreditCard';

@Injectable({
  providedIn: 'root',
})
export class TarjetService {
  constructor(private firebase: AngularFirestore) {}

  guardarTarjeta(tarjeta: CreditCard): Promise<any> {
    return this.firebase.collection('tarjetas').add(tarjeta);
  }
}
