import { Component, OnInit } from '@angular/core';
import { Meetup } from './meetup';
import { MeetupsService } from './meetups.service';

@Component({
  selector: 'meetups',
  templateUrl: 'meetups.component.html'
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];

  constructor(private meetupsService: MeetupsService) {
  }

  ngOnInit(): void {
    this.meetupsService.getMeetups().then(res => {
      this.meetups = res;
    });
  }

}
