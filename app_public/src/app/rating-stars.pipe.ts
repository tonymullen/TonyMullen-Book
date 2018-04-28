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
    console.log(starsHtml);
    return starsHtml
  }

}
