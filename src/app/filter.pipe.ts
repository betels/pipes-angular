import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'rxjs/internal/util/isArray';


@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    if (!isArray(value)) {
      return value;
    }
    return [...value].reverse();
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
