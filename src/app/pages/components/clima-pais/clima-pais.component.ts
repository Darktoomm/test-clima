import {Component, OnInit} from '@angular/core';
import {ClimaService} from '../../service/clima.service';
import {stringify} from 'querystring';
import {ClimaPais} from '../../models/clima-model';

@Component({
  selector: 'app-clima-pais',
  templateUrl: './clima-pais.component.html',
  styleUrls: ['../listado-clima/listado-clima.component.css']
})
export class ClimaPaisComponent implements OnInit {

  public ciudades = ['Monaco', 'Nice', 'Cannes', 'Saint-Tropez', 'Marseille', 'Toulouse', 'Bordeaux', 'Biarritz', 'Paris', 'Lyon', 'buenos aires', 'brasilia'];
  public ciudadSeleccionada: string;
  public clima: ClimaPais[];

  constructor(private climaService: ClimaService) {
  }

  ngOnInit() {
  }

  getClima(ciudad) {
    this.climaService.getClimaPaises(ciudad).subscribe(resp => {
      console.log(resp);
      this.clima = resp;
    });
  }

}
