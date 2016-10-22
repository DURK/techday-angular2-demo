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
      this.determineInProgressMeetups();
    });
  }

  private determineInProgressMeetups(): void {
    let now = new Date().getTime();
    this.meetups.filter(meetup => {
      return meetup.date < now && now < meetup.endDate;
    }).forEach(meetup => {
      meetup.inProgress = true;
    })
  }
}
