import { Component, Input, OnInit } from '@angular/core';
import { StarshipsService } from '../../../services/starships.service';
import { Pilot } from '../../models/pilot';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css'],
})
export class PilotsComponent implements OnInit {
  //obtener el array de id de pilotos que pertenesen a starship
  @Input() pilotsId: number[] = [];
  pilots: Pilot[] = [];
  pilotImg: string = '';

  constructor(public starshipsService: StarshipsService) { }

  ngOnInit(): void {
    // this.starshipsService.getPilots().subscribe((response) => {
    //   console.log(response);
    // });
    //
    //obtener datos de cada piloto y añadir a un array de pilotos
    this.pilotsId.forEach((id) => {
      this.starshipsService.getPilot(id).subscribe((response) => {
        this.pilots.push(response);
        //console.log(this.pilots);
      });
    });
  }
}
