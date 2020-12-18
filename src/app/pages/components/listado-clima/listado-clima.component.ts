import {Component, OnInit} from '@angular/core';
import {ClimaService} from '../../service/clima.service';
import {forEach} from '@angular/router/src/utils/collection';
import {DatePipe} from '@angular/common';
import {ClimaModel} from '../../models/clima-model';

@Component({
  selector: 'app-listado-clima',
  templateUrl: './listado-clima.component.html',
  styleUrls: ['./listado-clima.component.css']
})
export class ListadoClimaComponent implements OnInit {

  public climas: ClimaModel[] = [];
  public climasDias: ClimaModel[] = [];
  public info = [];
  public ubicacion: string;

  constructor(private climaService: ClimaService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.getUbicacion();
  }

  getUbicacion() {
    this.climaService.getUbicacion().subscribe(resp => {
      this.ubicacion = resp['city'];
      this.getClima(this.ubicacion);
    });
  }

  getClima(ciudad) {
    this.climaService.getClimaLocal(ciudad).subscribe(resp => {
      this.climas = resp['list'];
      this.info = resp['city'];
      this.getDays();
    });

  }

  getDays() {
    this.climas.forEach(clima => {
      if (this.climasDias.length === 0) {
        return this.climasDias.push(clima);
      }
      const fechaA = this.datePipe.transform(this.climasDias[this.climasDias.length - 1].dt_txt);
      const fechaB = this.datePipe.transform(clima.dt_txt);
      if (fechaA < fechaB) {
        this.climasDias.push(clima);
      }
    });
  }


}
