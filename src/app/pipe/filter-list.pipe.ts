import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(todos: any, filterText: any[]): any {
    console.log('todos : ', todos);
    if ( !todos ) { return []; }

    if ( !filterText ) { return todos; }

    return this.searchResult ( todos, filterText);
  }

  private searchResult(list, filterText) {
    const output = [];
    list.forEach(element => {
      if (element.username.includes(filterText)) {
        output.push(element);
       }
    });
    console.log('Filtered value : ', output);
    return output;
  }
}
