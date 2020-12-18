export class ClimaModel {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Temperatura;
  pop: number;
  sys: [];
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export class Temperatura {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

export class Clouds {
  all: number;
}

export class Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export class Wind {
  deg: number;
  speed: number;
}

export class ClimaPais {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  dt_txt: string;
  main: Temperatura;
  name: string;
  pop: number;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export class Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}
