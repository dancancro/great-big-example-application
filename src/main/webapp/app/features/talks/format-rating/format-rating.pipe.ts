import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRating'
})
export class FormatRatingPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}
