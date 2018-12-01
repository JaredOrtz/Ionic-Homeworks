import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models/list.model';

@Pipe({
  name: 'filterComplet',
  pure: false
})
export class FilterCompletPipe implements PipeTransform {
  
  transform(lists: List[], completed:boolean) {
   	return lists.filter(list =>{
   		return list.finished === completed	
   	});
  }
}
