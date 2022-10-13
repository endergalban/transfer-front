import { Pipe, PipeTransform, } from '@angular/core';

@Pipe({ name: 'rut', })
export class RutPipe implements PipeTransform {
  transform(input: string): string {
    let value = '';

    if (input) {
      const inputTemp = input.replace(/\./g, '').replace(/-/, '');
      const div = inputTemp.substring(inputTemp.length - 1);
      const rut = inputTemp.substring(0, inputTemp.length - 1);
      const values = [];
      let countPointDecimal = 1;
      for (let i = rut.length - 1; i >= 0; i -= 1) {
        values.unshift(rut[i]);
        if (countPointDecimal === 3) {
          values.unshift('.');
          countPointDecimal = 0;
        }
        countPointDecimal+=1;
      }
      values.push('-');
      values.push(div);
      value = values.join('');
    }
    return value;
  }
}
