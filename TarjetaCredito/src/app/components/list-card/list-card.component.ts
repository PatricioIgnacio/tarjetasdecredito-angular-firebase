import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css'],
})
export class ListCardComponent implements OnInit {
  cardList: CreditCard[] = [];

  constructor(
    private _tarjetaService: CardService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.obtenerTarjetas().subscribe((doc: any) => {
      this.cardList = [];
      doc.forEach((element: any) => {
        this.cardList.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
    });
  }

  eliminarTarjeta(id: any) {
    this._tarjetaService
      .eliminarTarjeta(id)
      .then(() => {
        this.toastr.error('Tarjeta eliminada con éxito', 'Registro eliminado');
      })
      .catch((error: any) => {
        this.toastr.error('Ocurrio un error', 'Error');
        console.log(error);
      });
  }

  editarTarjeta(tarjeta: CreditCard) {
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }
}
