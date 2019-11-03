import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): Date {


    let date = new Date(value);
    console.log(value);
    let dateWithNoTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return dateWithNoTime;
  }

}
