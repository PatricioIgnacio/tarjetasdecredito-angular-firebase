import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CreditCard } from '../models/CreditCard';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private card$ = new Subject<any>();
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

  editarTarjeta(id: string, tarjeta: any): Promise<any> {
    return this.firestore.collection('tarjetas').doc(id).update(tarjeta);
  }

  addTarjetaEdit(tarjeta: CreditCard) {
    this.card$.next(tarjeta);
  }

  getTarjetaEdit(): Observable<CreditCard> {
    return this.card$.asObservable();
  }
}
