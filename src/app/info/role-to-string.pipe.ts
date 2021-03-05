import { Pipe, PipeTransform } from '@angular/core';
import { RoleType } from './content';

@Pipe({
  name: 'roleToString'
})
export class RoleToStringPipe implements PipeTransform {

  transform(value: number): unknown {
    return RoleType[value];
  }

}
