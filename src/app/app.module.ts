import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { MotoComponent } from './moto/moto.component';
import { SeacontComponent } from './seacont/seacont.component';
import { MotoDetalleComponent } from './moto-detalle/moto-detalle.component';
import { SeacontDetalleComponent } from './seacont-detalle/seacont-detalle.component';
import { ArchivoComponent } from './archivo/archivo.component';
import { PreguntaEmpresaComponent } from './pregunta-empresa/pregunta-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    HomeComponent,
    MotoComponent,
    SeacontComponent,
    MotoDetalleComponent,
    SeacontDetalleComponent,
    ArchivoComponent,
    PreguntaEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
