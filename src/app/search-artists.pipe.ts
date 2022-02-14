import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: string ): any {
    return pipeData.filter(item =>{
      return(
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()
        ))
       }
    
     )
  }

}
