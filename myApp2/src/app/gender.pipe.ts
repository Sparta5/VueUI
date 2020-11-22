import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  // {{ 1 | gender }}
  // 1男 0女 2保密
  transform(value) {
    return ['女', '男', '保密'][value];
  }
}
