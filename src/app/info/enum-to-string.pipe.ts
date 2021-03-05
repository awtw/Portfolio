import { Pipe, PipeTransform } from '@angular/core';
import { ProjectType } from './content';

@Pipe({
  name: 'enumToString'
})
export class EnumToStringPipe implements PipeTransform {

  transform(value: number): any {
    return ProjectType[value];
  }

}
