import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, fromEvent, merge } from "rxjs";
import { debounceTime, distinct, flatMap, map, tap } from "rxjs/operators";
import { filter } from "rxjs/operators";
import { Starship } from "src/app/models/starship";

export interface ApisData{
  count: number,
  next: string,
  previous: any,
  results:Starship;

}
@Injectable({ providedIn: 'root' })
export class InfScrollService  {


}

