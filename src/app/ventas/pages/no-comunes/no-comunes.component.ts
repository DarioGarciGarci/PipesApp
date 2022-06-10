import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect 
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'femenino': 'invitarla',
    'masculino': 'invitarle'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Sara','Sergio'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'no tenemos un cliente esperando',
    '=2': 'tenemos dos cliente esperando',
    'other': 'tenemos # cliente esperando',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
