import { User } from './user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'useremailfilterpipe'
})
export class UserEmailFilterPipe implements PipeTransform {

  //  value:  what is fed into the pipe
  //          
  //  args:   what is after the colon
  //          
  //  returns:  transformed input
  // was transform(value: User[], filter_term: string): any {
  
  transform(usersToSearch: User[], filter_term: string): any {
    if(!filter_term) return usersToSearch;
    return usersToSearch.filter(user=> user.email.toLowerCase().indexOf(filter_term.toLowerCase()) > -1);
  }

}
