import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-player2',
  templateUrl: './player2.component.html',
  styleUrls: ['./player2.component.scss']
})
export class Player2Component implements OnInit {
@Input() childMessage:string ="";
  constructor() { }
  ngOnInit(): void {
  }
  message: string = "pong";
  @Output() messageEvent = new EventEmitter();
 
  sendBall(){
    //this.isDisplayed = false;
    this.messageEvent.emit(this.message);
  }
}
