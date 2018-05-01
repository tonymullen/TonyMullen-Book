// My first try at making my own rating stars used a pipe.
// The author's expected approach is to use a component. I'm
// leaving the pipe in for reference.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingStars'
})
export class RatingStarsPipe implements PipeTransform {

  transform(rating: number): string {
    let starsHtml: string = '<small>&nbsp;';

    for(let i = 1; i <= 5; i++) {
      starsHtml += '<i class="fa fa-star'+(rating < i ? '-o' : '')+'"></i>'
    }

    starsHtml += '</small>';
    return starsHtml
  }

}
