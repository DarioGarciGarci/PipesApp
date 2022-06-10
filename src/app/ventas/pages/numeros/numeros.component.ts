import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 123345234.213456;
  porcentaje: number = 0.48567;

  constructor() { }

  ngOnInit(): void {
  }

}
