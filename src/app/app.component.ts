import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild("texto", {static:true}) texto!: ElementRef;

  constructor(private rendered2: Renderer2){
  }

  ngOnInit(): void{
    this.rendered2.setStyle(this.texto.nativeElement,"margin","1rem");
    this.rendered2.setStyle(this.texto.nativeElement,"padding","0");
    this.rendered2.setStyle(this.texto.nativeElement,"width","2em");
    this.rendered2.setStyle(this.texto.nativeElement,"height","auto");
    this.rendered2.setStyle(this.texto.nativeElement,"transitionTimingFunction","ease-out");
  }
}
