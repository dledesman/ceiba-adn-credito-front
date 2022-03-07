import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  @Input() listaAvisos: string[]=[];
  @Input() listaAdvertencias: string[]=[];
  @Input() listaErrores: string[]=[];
  constructor() { }

  limpiarTodo(): void {
    this.listaAvisos = [];
    this.listaAdvertencias=[];
    this.listaErrores=[];
  }

  agregarAviso(mensaje: string): void {
    this.listaAvisos.push(mensaje);
    this.listaAvisos.length
  }

  agregarAdvertencia(mensaje: string): void {
    this.listaAvisos.push(mensaje);
  }

  agregarError(mensaje: string): void {
    this.listaAvisos.push(mensaje);
  }

  limpiarAvisos(): void {
    this.listaAvisos = [];
  }

  limpiarAdvertencias(): void {
    this.listaAdvertencias=[];
  }

  limpiarErrores(): void {
    this.listaErrores=[];
  }


  ngOnInit() {
  }

}
