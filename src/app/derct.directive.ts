import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDerct]'
})
export class DerctDirective implements OnInit{
  @Input()
  appearance:string

  constructor(private element:ElementRef<HTMLElement>) {
    this.element.nativeElement.addEventListener("mouseenter",() => this.addStyle())
    this.element.nativeElement.addEventListener("mouseleave",() => this.removeStyle())
  }
  ngOnInit() {
  }
  addStyle(){
    this.element.nativeElement.classList.add(this.appearance)
  }
  removeStyle(){
    this.element.nativeElement.classList.remove(this.appearance)
  }
}
