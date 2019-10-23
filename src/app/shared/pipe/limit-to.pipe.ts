import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const limit = args.length > 0 &&  typeof (args[0]) !== undefined ? parseInt(args[0],10) : 40;
    const trail = args.length > 1 &&  typeof (args[1]) !== undefined ? args[1] : '...';
    return value.length < 40 ? value : value.substring(0,limit) + trail;
  }

}
