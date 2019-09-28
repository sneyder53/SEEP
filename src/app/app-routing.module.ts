import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import  { EmpresaComponent} from './empresa/empresa.component';
import { MotoComponent } from './moto/moto.component';
import { SeacontComponent } from './seacont/seacont.component';
import { MotoDetalleComponent } from './moto-detalle/moto-detalle.component';
import { SeacontDetalleComponent } from './seacont-detalle/seacont-detalle.component';
import { ArchivoComponent } from './archivo/archivo.component';




const routes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'empresa', component: EmpresaComponent },
	{path: 'moto', component: MotoComponent },
	{path: 'seacont', component: SeacontComponent },
	{path: 'motodetalle', component: MotoDetalleComponent },
	{path: 'seacontdetalle', component: SeacontDetalleComponent },
	{path: 'archivo/:id', component: ArchivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
