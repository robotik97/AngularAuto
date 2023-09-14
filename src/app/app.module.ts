import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { WheelComponent } from './components/wheel/wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
