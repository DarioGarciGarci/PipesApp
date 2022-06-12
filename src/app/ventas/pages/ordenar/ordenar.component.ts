import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayus(){
    this.enMayus = this.enMayus ? false : true;
  }

}
