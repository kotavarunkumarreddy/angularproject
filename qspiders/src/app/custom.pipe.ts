import{  PipeTransform,Pipe}
    from '@angular/core';
@Pipe({name:'summary'})
export class custompipe implements PipeTransform{
    transform(value:string,args)
}
