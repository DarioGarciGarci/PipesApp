import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple'; //Efecto click boton



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    RippleModule
  ]
})
export class PrimeNgModule { }
