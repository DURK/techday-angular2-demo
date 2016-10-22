import { NgModule } from '@angular/core';
import { MeetupsComponent } from './meetups.component';
import { MeetupsService } from './meetups.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      MeetupsComponent
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
