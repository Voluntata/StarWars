import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from 'src/services/starships.service';
import { Starship } from '../models/starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
})
export class StarshipsComponent implements OnInit {
  constructor(private starshipsService: StarshipsService, private router: Router, private activRoute: ActivatedRoute, private http: HttpClient) { }

  page: number = 1;
  itemsPerPage: number = 10;
  totalItems: any = 36;

  id: number = 1;
  ships: Starship[] = []
  starships: Starship[] = [];
  selectedShip!: Starship;


  ngOnInit(): void {
    this.getPage()
  }

  //ngx-pagination function
  gty(page: any) {
    this.http.get(`${this.starshipsService.baseUrl}?page=${page}&size=${this.itemsPerPage}/`)
      .subscribe((data: any) => {
        if (data.result) {
          this.starships.push(data.result);
        }
      })
  }
// elegir el starship y navegar al detalle
  onSelect(ship: Starship) {
    this.selectedShip = ship;
  //  console.log(this.selectedShip)
    this.id = this.starshipsService.getId(this.selectedShip.url)
    this.router.navigateByUrl('starships/' + this.id);

  }

  //obtener todas las paginas de starships
  getPage() {
    for (let i = 0; i < 4; i++) {
      this.starshipsService.getApi(this.page + i).subscribe(response => {
      //  console.log(response);
        this.starships.push(...response)

      });
    }


  }








}
