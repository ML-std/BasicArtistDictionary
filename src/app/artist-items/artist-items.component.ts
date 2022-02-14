import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  
})
export class ArtistItemsComponent 
implements OnInit {
  @Input() artist0: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
