// Angular
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  counter: number = 10;

  ngOnInit() {}

  increaseBy(value: number) {
    this.counter += value;
  }
}
