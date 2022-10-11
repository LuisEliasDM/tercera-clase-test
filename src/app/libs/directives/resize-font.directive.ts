import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[resizeFont]'
})
export class ResizeFontDirective implements OnInit {
  @Input() transitionTime: number = 10;
  @Input() startSize: number = 6;
  @Input() endSize: number = 10;
  private currentSize:number = 0;

  @HostListener("mouseenter") onMousEenter = () => {
    this.element.nativeElement.style.transition = `all ${this.transitionTime}s`
    this.element.nativeElement.style.width = this.endSize + "em"
    this.currentSize = this.endSize
  }
  @HostListener("mouseleave") onMousLeave = () => {
    this.element.nativeElement.style.transition = `all ${this.transitionTime}s`
    this.element.nativeElement.style.width = this.startSize + "em"
    this.currentSize = this.startSize
  }

  @HostListener("click") onClick = () => {
    this.currentSize += 4;
    this.element.nativeElement.style.transition = `all 1s`
    this.element.nativeElement.style.width = `${this.currentSize}em`
  }


  constructor(private element: ElementRef) { }

  ngOnInit(): void{
    this.element.nativeElement.style.transition = `all ${this.transitionTime}s`
    this.element.nativeElement.style.width = `${this.startSize}em`
    this.currentSize = this.startSize
  }

}
