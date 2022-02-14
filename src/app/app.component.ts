import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`.list-group-item:first-child{
    border-top-left-radius :0;
    border-top: 0;
    border-top-right-radius : 0;
  }`]
})
export class AppComponent implements OnInit {
  query: string;
  currentArtist: any;
  artists : { name : string, shortname : string, reknown : string, bio : string, highlight: boolean}[] = [];

  constructor(private http: HttpClient){
    this.query = "" ;
    
  }
  showArtist(e: Event,item: {name : string, shortname : string, reknown : string, bio : string; highlight: boolean}){
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentArtist = item;
  }
  ngOnInit(): void {
      this.http.get<any>('../external/data.json').subscribe(data => {
        this.artists = data;
      });
  }
}
