import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeetupsComponent } from './meetups.component';
import { MeetupsService } from './meetups.service';

@NgModule({
  declarations: [
    AppComponent,
    MeetupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MeetupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
