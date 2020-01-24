import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        // this.elementRef.nativeElement.style.backgroundColor = 'green';
        // this.elementRef.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');
    }
}