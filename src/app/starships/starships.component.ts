import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from 'src/services/starships.service';
import { Starship } from '../models/starship';
import { ApisData } from '../../services/infinite-scroll.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  constructor(private starshipsService: StarshipsService, private router: Router, private activRoute: ActivatedRoute, private http: HttpClient) { }

  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: any;

  id: number = 0;
  ships: Starship[] = []
  starships: Starship[] = [];
  selectedShip!: Starship;

  ngOnInit(): void {

    // this.starshipsService.getAll()
    // .subscribe((starships: Starship[]) => {
    //   this.starships = starships;

    this.getPage()

    //});
  }

  gty(page: any) {

    this.http.get(`${this.starshipsService.baseUrl}?page=${page=this.page}&size=${this.itemsPerPage}/`).subscribe((data: any) => {
      this.starships = data.result;

    })
  }

  onSelect(ship: Starship) {
    this.selectedShip = ship;
    console.log(this.selectedShip)
    this.id = this.starshipsService.getId(this.selectedShip.url)
    this.router.navigateByUrl('starships/' + this.id);

  }
  getPage() {
    this.starshipsService.getApi(this.page).subscribe(response => {
      console.log(response);
      //this.ships = response;
      this.starships.push(...response)
    });
  }


  next() {
    this.page = this.page + 1;
    this.getPage();

  }
}
