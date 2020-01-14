import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverContentInput', null) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.serverContentInput.nativeElement.value = 'Hi stupid';
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
