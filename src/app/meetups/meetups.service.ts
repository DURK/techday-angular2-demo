import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Meetup } from './meetup';
import 'rxjs/add/operator/map';

@Injectable()
export class MeetupsService {

  constructor(private http: Http) {
  }

  getMeetups(): Promise<Meetup[]> {
    return new Promise(accept => {
      return this.http
        .get('assets/testdata/meetups.json')
        .map(res => res.json())
        .subscribe(meetups => accept(meetups));
    });
  }

}
