import { Pipe, PipeTransform } from '@angular/core';
import { CaseType } from './project';

@Pipe({
  name: 'caseType'
})
export class CaseTypePipe implements PipeTransform {

  transform(value: number): any {
    return CaseType[value];
  }

}
