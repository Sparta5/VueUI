import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe implements PipeTransform {

  transform(value) {
    return ['群众','团员','党员','无党派'][value]
  }

}
