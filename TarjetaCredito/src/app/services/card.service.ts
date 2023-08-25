import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CreditCard } from '../models/CreditCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private firestore: AngularFirestore) {}

  guardarTarjeta(tarjeta: CreditCard): Promise<any> {
    return this.firestore.collection('tarjetas').add(tarjeta);
  }

  obtenerTarjetas(): Observable<any> {
    return this.firestore
      .collection('tarjetas', (ref) => ref.orderBy('fechaCreacion', 'desc'))
      .snapshotChanges();
  }

  eliminarTarjeta(id: string): Promise<any> {
    return this.firestore.collection('tarjetas').doc(id).delete();
  }
}
