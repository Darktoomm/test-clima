import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ListadoClimaComponent } from './components/listado-clima/listado-clima.component';
import { ClimaPaisComponent } from './components/clima-pais/clima-pais.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ListadoClimaComponent, ClimaPaisComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class PagesModule { }
