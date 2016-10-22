import { Component, Input } from '@angular/core';
import { Meetup } from './meetup';

@Component({
  selector: 'meetup-in-progress',
  templateUrl: 'meetup-in-progress.component.html',
  styles: [`
    .blink {
      animation: blink-animation 1s steps(5, start) infinite;
      -webkit-animation: blink-animation 1s steps(5, start) infinite;
    }
    @keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }
    @-webkit-keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }
  `]
})
export class MeetupInProgressComponent {
  @Input() meetup: Meetup;
  dismissed: boolean = false;

  constructor() {
  }

  dismiss(): void {
    this.dismissed = true;
  }
}
