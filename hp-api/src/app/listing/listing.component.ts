import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  li: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.li = LoadData(this.li);
    if (this.li == null || this.li.length === 0){
      this.http.get('https://hp-api.herokuapp.com/api/characters')
        .subscribe(Response => {
          this.li = Response;
          SaveData(this.li);
        });
    }
  }
  onDelete(index: number): void{
    delete this.li[index];
    this.li = this.li.filter((x: any) => x !== null);
    SaveData(this.li);
  }

  onModify(index: number): void{
    this.router.navigate(['form-component/' + index]);
  }
}


function SaveData(li: any){
  const json = JSON.stringify(li);
  localStorage.setItem('api_data', json);
  console.log('saved');
}

function LoadData(li: any){
  const json = localStorage.getItem('api_data');
  if (json) {
    li = JSON.parse(json);
    return li;
  }
}




