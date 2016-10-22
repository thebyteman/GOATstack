import { Component } from '@angular/core';

import { ClockService }  from '../../services/clock/clock.service';

@Component({
  selector: 'sun-and-moon',
  providers: [ClockService],
  template: `
    <h2 class="clock" [style.left.%]="clockAlign" >{{clock | async | date: 'mediumTime'}}</h2>
    <img id="sun" src="assets/sun.svg">
    `,
  styles: [`
    .clock{
      position: absolute;
      top: 47%;
    }
      #sun{
        height: 300px;
        width: 300px;
      }
    `]

})

export class SunandmoonComponent {

  public clock;
  clockAlign: number = 37;

  constructor(public clockService: ClockService) {
    this.clock = this.clockService.currentTime;
  }

}