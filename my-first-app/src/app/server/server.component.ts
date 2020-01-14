import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  serverID: number = 10;
  serverStatus: string = "offline";
  serverName: string = "";

  onUpdateMessage(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
