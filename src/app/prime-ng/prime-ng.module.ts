import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple'; //Efecto click boton



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    RippleModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
