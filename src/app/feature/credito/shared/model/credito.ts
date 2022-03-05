export class Credito {
    id?: number;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    fechaSolicitud: Date;
    ingresoMensual: Number;
    egresoMensual: Number;
    codigoMoneda: string;
    tasaCambio: number
    plazo: number;

    constructor (id: number, tipoIdentificacion: string, numeroIdentificacion: string, 
        fechaSolicitud: Date, ingresoMensual: number, egresoMensual: number, 
        codigoMoneda: string, tasaCambio: number, plazo: number) {
            this.id = id;;
            this.tipoIdentificacion = tipoIdentificacion;
            this.numeroIdentificacion = numeroIdentificacion;
            this.fechaSolicitud = fechaSolicitud;
            this.ingresoMensual = ingresoMensual;
            this.egresoMensual = egresoMensual;
            this.codigoMoneda = codigoMoneda;
            this.tasaCambio = tasaCambio;
            this.plazo = plazo;
        }
}