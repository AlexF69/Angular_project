import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from 'src/models/beer.interface';

@Pipe({
  name: 'filterPipe'
})
// non so se alla finae questo componente è stato usato(?)
export class FilterPipePipe implements PipeTransform {

  transform(value: Beer[], type: "small" | "medium" ): Beer[] {
    return value.filter((beer: Beer) => beer.type === type);
  }

}
