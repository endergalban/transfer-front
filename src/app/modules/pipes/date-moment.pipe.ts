import { Pipe, PipeTransform, } from '@angular/core';
import * as moment from 'moment';
import { APPCONSTANT } from '../app.constant';

@Pipe({ name: 'dateMoment', })
export class DateMomentPipe implements PipeTransform {
  transform(input: string): string {
    let date = '';
    if (input && moment(input).isValid()) {
      date = moment(input).format(APPCONSTANT.format.frontend.Date);
    }
    return date;
  }
}
