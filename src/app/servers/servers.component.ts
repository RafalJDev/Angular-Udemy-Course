import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server has created';
  serverName = 'Testserver';
  userName: String = '';
  isUserNameEmpty = false;
  serverCreated =false;
  servers = ['Testserver', 'Testserver 2']


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  resetUserName(event: any){
    if(this.userName != '') {
      this.userName = '';
    }
  }
  keyUpEventHandler(){
    this.isUserNameEmpty = true;
  }

}
