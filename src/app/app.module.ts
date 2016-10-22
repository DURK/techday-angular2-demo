import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupsService } from './meetups/meetups.service';
import { MeetupsModule } from './meetups/meetups.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MeetupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
