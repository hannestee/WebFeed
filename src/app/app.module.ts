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
import { SodexoComponent } from './sodexo/sodexo.component';
import {SodexoService} from "./services/sodexo.service";
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import {RsstojsonService} from "./services/rsstojson.service";

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    TrusturlPipe,
    FaderComponent,
    FacebookComponent,
    SodexoComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YoutubeService, SodexoService, SanitizeHtmlPipe, RsstojsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
