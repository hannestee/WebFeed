import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import {YoutubeService} from "./services/youtube.service";
import { TrusturlPipe } from './pipes/trusturl.pipe';
import { FaderComponent } from './fader/fader.component';
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TrusturlPipe,
    FaderComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
