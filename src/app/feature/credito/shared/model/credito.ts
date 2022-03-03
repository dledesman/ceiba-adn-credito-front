export class Credito {
    id: number;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    fechaSolicitud: Date;
    ingresoMensual: Number;
    egresoMensual: Number;
    codigoMoneda: string;
    tasaCambio: number
    plazo: number;
}