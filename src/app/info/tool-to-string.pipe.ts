import { Pipe, PipeTransform } from '@angular/core';
import { ToolType } from './content';

@Pipe({
  name: 'toolToString'
})
export class ToolToStringPipe implements PipeTransform {

  transform(value: number): unknown {
    return ToolType[value];
  }

}
