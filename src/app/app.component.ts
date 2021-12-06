import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {

  }


  quantity: number = 1;
  i: number = 1;
  plus() {
    if (this.i != 10) {
      this.i++;
      this.quantity = this.i;
    }
  }

  minus() {
    if (this.i > 0) {
      this.i--;
      this.quantity = this.i;
    }
  }
}
