import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Starship } from '../models/starship';
import { StarshipsService } from '../../services/starships.service';
import { Pilot } from '../models/pilot';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship!: Starship;
  id: number = 0;
  starshipImage: string= '';
  pilots= new Array;

  pilotsId: number[] = [];

  constructor(private activRoute: ActivatedRoute, private starShipsService: StarshipsService) { }


  ngOnInit(): void {

    this.activRoute.params
      .subscribe(
        (params: Params) => {
          console.log(params)
          this.id = params['id'];
          this.starShipsService.getOne(this.id).subscribe((starships: Starship) => {
            this.starship = starships;
            console.log(this.starship)
            this.starshipImage = 'https://starwars-visualguide.com/assets/img/starships/'+this.id+'.jpg';
            this.starshipPilots();
            console.log(this.pilotsId);
            //this.pilots = this.starship.pilots;
          }
          )
        }
      );

  }

  defaultImage(){
   this.starshipImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }

  starshipPilots(){
   this.pilots = this.starship.pilots;
   this.pilots.forEach(pilot => {
   const pilotId = this.starShipsService.getId(pilot);
   this.pilotsId.push(pilotId);
   return this.pilotsId;
    });
 //   console.log('pilots - '+ this.pilots)
 //   console.log(this.pilotsId)

  }
 pilotsF(){
   console.log(this.pilotsId)
   console.log(this.pilots)
 }
}

