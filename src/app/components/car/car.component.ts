import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  name!: string;
  model!: string;
  speed!: number;
  colors!: Colors;
  options!: string[];

  constructor() {}

  ngOnInit() {
    this.name = 'Honda';
    this.model = 'CR-V';
    this.speed = 190;
    this.colors = {
      car: 'Black',
      salon: 'White',
      wheels: 'Silver',
    };
    this.options = ['abs', 'esp', 'navigation system'];
  }
}
interface Colors {
  car: string;
  salon: string;
  wheels: string
}
