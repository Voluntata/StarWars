import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Starship } from 'src/app/models/starship';


// export interface Ships {
//   name: string; //The name of this starship. The common name, such as "Death Star".
//   model: string; //The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
//   starship_class: string; //The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
//   manufacturer: string; //The manufacturer of this starship. Comma separated if more than one.
//   cost_in_credits: string; // The cost of this starship new, in galactic credits.
//   length: string; //The length of this starship in meters.
//   crew: string; // The number of personnel needed to run or pilot this starship.
//   passengers: string; //The number of non-essential people this starship can transport.
//   max_atmosphering_speed: string; //The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
//   hyperdrive_rating: string; //The class of this starships hyperdrive.
//   MGLT: string; //The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
//   cargo_capacity: string; //The maximum number of kilograms that this starship can transport.
//   consumables: string; //he maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
//   films: Array<string>; //An array of Film URL Resources that this starship has appeared in.
//   pilots: Array<string>; //An array of People URL Resources that this starship has been piloted by.
//   url: string; //the hypermedia URL of this resource.
//   created: string; // the ISO 8601 date format of the time that this resource was created.
//   edited: string;
// }

// export interface ApisData{
//   count: number,
//   next: string,
//   previous: any,
//   results:Starship;

// }




@Injectable({ providedIn: 'root' })
export class StarshipsService  {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://swapi.dev/api/starships/';
 // baseUrl = 'https://swapi.py4e.com/api/starships';
  ships: Starship[] = []

getById(id:number): Observable<Starship[]> {
  console.log(`${this.baseUrl}${id}}`)
    return this.getData(`${this.baseUrl}${id}/`)
}

getId(url: string){
let newurl =  url.replace( /^\D+/g, '');
newurl = newurl.replace('/', '')
return parseInt(newurl);

}

getAll(): Observable<Starship[]> {
return this.getData(`${this.baseUrl}`)

}
 private getData(url:string){
   return this.http.get(url).
   pipe(map((response:any) =>

   <Starship[]>response.results))
 }


  getOne(id: number) {
    return this.http.get<Starship>(`${this.baseUrl}${id}`)
  }

getShip(index: number){
  console.log(this.ships[index]);
  return this.ships[index];
}

}
  // getAll() {
  //  return this.http.get<Starship[]>(this.baseUrl).pipe(map(response => {
  // console.log(response);

  //  return  this.ships= response;

  //   //  console.log(this.result)

  //  }))

  //}

  //getPage(){


     // `this.baseUrl ?page=${page}&size=${this.itemsPerPage}`)
  //}

