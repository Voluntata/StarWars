import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/services/starships.service';
import { ApiResponseData } from '../../services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  constructor(private starshipsService: StarshipsService) {}
  name: string = '';
  model: string = '';
  ships: ApiResponseData[] = [];

  ngOnInit(): void {
    this.starshipsService.getAll().subscribe((data) => {
      this.ships = data;
      console.log(this.ships);
    });
  }

  getOne() {
    return this.starshipsService.getOne().subscribe((data) => {
      this.name = data.name;
      this.model = data.model;
      console.log(data);
    });
  }

  getAll() {}
}
