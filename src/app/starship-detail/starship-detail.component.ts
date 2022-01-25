import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Starship } from '../models/starship';
import { StarshipsService } from '../../services/starships.service';
import { Pilot } from '../models/pilot';
import { slideInOutAnimation } from '../animations/side.animation';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css'],
      // // make slide in/out animation available to this component
      // animations: [slideInOutAnimation],

      // // attach the slide in/out animation to the host (root) element of this component
      // host: { '[@slideInOutAnimation]': '' }

})
export class StarshipDetailComponent implements OnInit {

  starship!: Starship;
  id: number = 0;
  starshipImage: string = '';
  pilots = new Array;

  pilotsId: number[] = [];

  constructor(private activRoute: ActivatedRoute, private starShipsService: StarshipsService) { }


  ngOnInit(): void {
//obtener datos de cada starship
    this.activRoute.params
      .subscribe(
        (params: Params) => {
          //console.log(params)
          this.id = params['id'];
          this.starShipsService.getOne(this.id).subscribe((starships: Starship) => {
            this.starship = starships;
           // console.log(this.starship)
            this.starshipImage = 'https://starwars-visualguide.com/assets/img/starships/' + this.id + '.jpg';
            this.starshipPilots();
          //  console.log(this.pilotsId);

          }
          )
        }
      );

  }
 // poner imagen por defecto si no hay imagen
  defaultImage() {
    this.starshipImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }
// obtener id de pilotos que pertenesen a starship
  starshipPilots() {
    this.pilots = this.starship.pilots;
    this.pilots.forEach(pilot => {
      const pilotId = this.starShipsService.getId(pilot);
      this.pilotsId.push(pilotId);
      return this.pilotsId;
    });
    //   console.log('pilots - '+ this.pilots)
    //   console.log(this.pilotsId)

  }

}

