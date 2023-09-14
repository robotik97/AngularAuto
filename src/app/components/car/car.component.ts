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
  isEdit: boolean=false;

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
  carSelect(carName: string) {
    if (carName == 'Honda') {
      this.name = 'Honda';
      this.model = 'CR-V';
      this.speed = 190;
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Silver',
      };
      this.options = [
        'abs',
        'esp',
        'navigation system',
        'Automatic transmission',
      ];
    } else if (carName == 'Audi') {
      this.name = 'Audi';
      this.model = 'Q8';
      this.speed = 260;
      this.colors = {
        car: 'Red',
        salon: 'Black',
        wheels: 'Black',
      };
      this.options = ['abs', 'esp', 'navigation system'];
    } else {
      this.name = 'BMW';
      this.model = 'M5';
      this.speed = 280;
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'Black',
      };
      this.options = ['abs', 'esp', 'navigation system', 'sport engine'];
    }
  }

  addNewOption(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(option:string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }
  showEdit(){
    this.isEdit=!this.isEdit
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
