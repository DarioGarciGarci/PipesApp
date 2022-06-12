import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayus: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.gris
    },
    {
      nombre: 'Masacre',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Capitana Marvel',
      vuela: true,
      color: Color.azul
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayus(){
    this.enMayus = this.enMayus ? false : true;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
