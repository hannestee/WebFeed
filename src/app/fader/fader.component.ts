import {Component, OnChanges,OnInit, trigger, state, transition, style, animate, Input} from '@angular/core';
import {AppComponent} from "../app.component";
import {SodexoService} from "../services/sodexo.service";
import {SodexoComponent} from "../sodexo/sodexo.component";
import {YoutubeService} from "../services/youtube.service";
import {VideoComponent} from "../video/video.component";

@Component({
  selector: 'app-fader',
  templateUrl: './fader.component.html',
  styleUrls: ['./fader.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1, transform: 'translateY(0%)'})),
      state('hidden', style({ opacity: 0, transform: 'translateY(100%)', display: 'none'})),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class FaderComponent implements OnInit {
  @Input() isVisible : boolean = true;
  visibility = 'shown';
  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  private ytChannelName: string='';
  private RSS: string = '';

  constructor(private rssService: SodexoService, private youtubeService: YoutubeService) { }

  setRSS = () => {
    this.rssService.setUrl(this.RSS);
    this.getRSS();
  };

  public getRSS = () => {
    console.log('asd');
    this.rssService.getActivities().subscribe(
      (response) => {
        console.log(response);
        this.rssService.setData(response);
        console.log(this.rssService.data);
      },
      (error) => (error.json())
    );
  };

  setYtName = () => {
    this.youtubeService.setData(this.ytChannelName);
    this.getChannelId();
  }

  public getChannelId(){
    this.youtubeService.nameupdated.subscribe(
      (response) => {
        console.log(response);
        //this.youtubeService.userId = JSON.stringify(response.items[0].id);
        //console.log(this.youtubeService.userId);
        //this.youtubeService.setData(this.youtubeService.channelId);
      },
      (error) => (error.json())

    );
  }



  ngOnInit() {
    this.getRSS();
    this.getChannelId();
  }

}
