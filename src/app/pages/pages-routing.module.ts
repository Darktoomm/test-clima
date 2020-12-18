import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoClimaComponent} from "./components/listado-clima/listado-clima.component";
import {ClimaPaisComponent} from "./components/clima-pais/clima-pais.component";

const routes: Routes = [
  {path: '', component: ListadoClimaComponent},
  {path: 'clima-paises', component: ClimaPaisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
