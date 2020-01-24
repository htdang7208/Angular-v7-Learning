import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @Input() defaultColor: string = 'transparent';  // default
  @Input() highlightColor: string = 'blue';       // default
  @HostBinding('style.backgroundColor') backgroundColor: string;
  // equal to [style.backgroundColor]="'yellow'" etc...

  ngOnInit() {
    this.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  // @HostListener('mouseenter') alias mouseenter(...)
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'purple');
    // this.backgroundColor = 'purple';
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
