export class CreditCard {
  id?: string;
  titular: string;
  numeroTarjeta: string;
  fechaExpiracion: string;
  cvv: number;
  fechaCreacion: Date;
  fechaActualizacion: Date;

  constructor(titular: string, numeroTarjeta: string, cvv: number) {
    this.titular = titular;
    this.numeroTarjeta = numeroTarjeta;
    this.fechaExpiracion = fehcaExpiracion;
    this.cvv = cvv;
    this.fechaCreacion = new Date();
    this.fechaActualizacion = new Date();
  }
}
