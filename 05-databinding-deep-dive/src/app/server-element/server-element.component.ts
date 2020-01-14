import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') private element: {
    type: string,
    name: string,
    content: string
  };
  @ContentChild('contentParagraph', null) paragraph: ElementRef;
  constructor() { 
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text is' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text is' + this.paragraph.nativeElement.textContent);
  }

}
