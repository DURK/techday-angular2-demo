import { NgModule } from '@angular/core';
import { MeetupsComponent } from './meetups.component';
import { MeetupsService } from './meetups.service';
import { CommonModule } from '@angular/common';
import { MeetupInProgressComponent } from './meetup-in-progress.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      MeetupsComponent,
      MeetupInProgressComponent
    ],
    providers: [
      MeetupsService
    ],
    exports: [
      MeetupsComponent
    ]
  }
)
export class MeetupsModule {
}
