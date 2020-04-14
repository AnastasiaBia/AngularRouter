import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player1',
  templateUrl: './player1.component.html',
  styleUrls: ['./player1.component.scss']
})
export class Player1Component implements OnInit {
  parentMessage: string = "";
  message: string;
  display: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }
  receiveMessage($event) {
    this.parentMessage = "";
    this.message = $event
    console.log(this.message)
  }
  sendBall() {
    this.parentMessage = "ping";
    this.message = "";
  }

}
