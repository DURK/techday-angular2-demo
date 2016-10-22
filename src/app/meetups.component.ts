import { Component, OnInit } from '@angular/core';
import { Meetup } from './meetup';

@Component({
  selector: 'meetups',
  templateUrl : 'meetups.component.html'
})
export class MeetupsComponent implements OnInit {
  meetups: Meetup[];

  constructor() {
  }

  ngOnInit(): void {
    this.meetups = [
      new Meetup('New Years Talk', new Date(2017, 1, 1), true),
      new Meetup('Avisi Techday', new Date(), true),
      new Meetup('HAN Tosti-Talk', new Date(2016, 9, 27, 12), false),
    ]
  }

}
