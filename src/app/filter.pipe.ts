import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false //false pipe will cause the pipe to be recalculated if the data changes -> this can cause performance issues BAD 
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, propname : string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    } 
    const resultArray = [];
    for (const item of value){
      if (item[propname] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
