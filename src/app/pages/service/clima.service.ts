import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {APPID, URL_API_IP, URL_API_WEATHER} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getClimaLocal(q) {
    const units = 'metric';
    const ruta = this.router.createUrlTree(['forecast'], {queryParams: {q, APPID, units}});
    return this.http.get(URL_API_WEATHER + ruta);
  }
  getClimaPaises(q) {
    const units = 'metric';
    const ruta = this.router.createUrlTree(['weather'], {queryParams: {q, APPID, units}});
    return this.http.get(URL_API_WEATHER + ruta);
  }
  getUbicacion(){
    return this.http.get(URL_API_IP);
  }
}


