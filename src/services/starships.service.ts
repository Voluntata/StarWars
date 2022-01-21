import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Starship } from 'src/app/models/starship';
import { Pilot } from 'src/app/models/pilot';


@Injectable({ providedIn: 'root' })
export class StarshipsService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://swapi.dev/api/starships/';
  pilotsUrl = 'https://swapi.dev/api/people/'
  // baseUrl = 'https://swapi.py4e.com/api/starships';
  ships: Starship[] = []


  //obtener el id de url
  getId(url: string) {
    let newurl = url.replace(/^\D+/g, '').replace('/', '')
    return parseInt(newurl);

  }
  //obtener todos los starships
  getAll(): Observable<Starship[]> {
    return this.getData(`${this.baseUrl}`)

  }
  private getData(url: string) {
    return this.http.get(url).
      pipe(map((response: any) =>
        <Starship[]>response.results))
  }

  // obtener un starship por Id
  getOne(id: number) {
    return this.http.get<Starship>(`${this.baseUrl}/${id}`)
  }
  // obtener todos los pilotos
  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(`${this.pilotsUrl}`).pipe(map((response: any) =>
      <Pilot[]>response.results))

  }
  //obtener un piloto por Id
  getPilot(id: number) {
    return this.http.get<Pilot>(`${this.pilotsUrl}/${id}`)
  }

  //obtener datos completos de Api (page)
  getApi(page: number) {
    return this.http.get(`${this.baseUrl}/?page=${page}`)
      .pipe(map((response: any) =>
        <Starship[]>response.results))

  }



}


