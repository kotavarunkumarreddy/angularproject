import { Directive,ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector:'[varun]'
})
export class customDirective{
    @HostBinding("style.backgroundColor")backgroundColor:string;
    constructor(el:ElementRef){
        el.nativeElement.style.background="yellow";
        el.nativeElement.style.padding="30ps";
        el.nativeElement.style.border="2px solid red";
    }
    @HostListener('mouseenter')mouseEnter(){
        console.log('mouse entered');
        this.backgroundColor='red';
    }
    @HostListener('mouseleave')mouseLeave(){
        console.log('mouseleaved');
        this.backgroundColor="green";
    }
    
}