import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CreditCard } from 'src/app/models/CreditCard';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
})
export class CreateCardComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _tarjetaService: CardService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: [
        '',
        [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16),
        ],
      ],
      fechaExpiracion: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      cvv: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  crearTarjeta() {
    const card: CreditCard = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    };

    this.loading = true;

    this._tarjetaService.guardarTarjeta(card).then(
      () => {
        this.loading = false;
        console.log('tarjeta registrada');
        this.toastr.success(
          'Tarjeta registrada correctamente',
          'Tarjeta registrada'
        );
        this.form.reset();
      },
      (error) => {
        this.loading = false;
        this.toastr.error('Ocurrio un error', 'Error');
        console.log(error);
      }
    );
  }
}
