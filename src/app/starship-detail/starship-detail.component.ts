import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Starship } from '../models/starship';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starship!: Starship;
  id: number = 0;
  starshipImage: string= '';

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
            this.starshipImage = 'https://starwars-visualguide.com/assets/img/starships/'+this.id+'.jpg'
            console.log(this.starshipImage)
          }
          )
        }
      );


  }

}

