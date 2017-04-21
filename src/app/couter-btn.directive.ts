import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCouterBtn]'
})
export class CouterBtnDirective {

  constructor() { }
  @HostListener('click',['$event'])
  inc(evt: MouseEvent){
    let btn = evt.target as HTMLButtonElement;
    let counter = +btn.innerHTML;
    counter++;
    btn.innerHTML = counter.toString();
  }
}
