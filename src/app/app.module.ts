import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Personalizados
import { SharedModule } from './shared/shared.module';
import { AppRotingModule } from '../../../03-paises-app/src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
