import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect 
  nombre: string = 'Susana';
  genero: string = 'femenino';
  invitacionMapa = {
    'femenino': 'invitarla',
    'masculino': 'invitarle'
  };

  //i18nPlural
  clientes: string[] = ['Maria','Sara','Sergio'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',
  };

  //KeyValuePipe
  persona ={
    nombre: 'Sara',
    edad: 35,
    direccion: 'Avilés, Asturias'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Spiderman',
      vuela: false
    },{
      nombre: 'Antman',
      vuela: false
    },
    {
      nombre: 'Ironaman',
      vuela: true
    },
    {
      nombre: 'Thor',
      vuela: true
    }
  ];

  //AsyncPipe
  miObservable = interval(1000); //Emite 0,1,2,3,4,......

  valorPromesa = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona() {
    if (this.nombre === 'Beni') {
      this.genero = 'femenino';
      this.nombre = 'Susana';
    } else {
      this.genero = 'masculino';
      this.nombre = 'Beni';
    }
  }

  borrarPersona() {
    this.clientes.pop();
  }

  anyadirPersonaFalsa(){
    this.clientes.push(this.nombresRandom());
  }

  nombresRandom(): string {
    const  index = Math.floor(Math.random() * (9 - 0)) + 0;
    console.log(index);
    const nombres = ['Juan','Pepe','Andrea','Marina','Andres','Martin','Rand','Julio','Abril','Carla'];

    return nombres[index];
  }
}
