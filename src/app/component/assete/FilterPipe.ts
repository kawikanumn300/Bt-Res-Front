import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchValue: any): any[] {
    if (!items) {return []};
    if (!searchValue) {return items};

    searchValue = searchValue.toLowerCase();

    return items.filter(item => {
      return Object.values(item).some(value => {
        return String(value).toLowerCase().includes(searchValue);
      });
    });
  }
}
