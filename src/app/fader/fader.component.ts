import {Component, OnChanges,OnInit, trigger, state, transition, style, animate, Input} from '@angular/core';
import {AppComponent} from "../app.component";
import {SodexoService} from "../services/sodexo.service";
import {SodexoComponent} from "../sodexo/sodexo.component";
import {YoutubeService} from "../services/youtube.service";
import {VideoComponent} from "../video/video.component";
import {RsstojsonService} from "../services/rsstojson.service";
import {TwitterService} from "../services/twitter.service";

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

  private id: string = '';
  private data: any = [];
  private ytChannelName: string='';
  private RSS: string = '';
  private FB: string = '';
  private TWITTER: string = '';



  constructor(private rssService: SodexoService, private youtubeService: YoutubeService, private facebookService: RsstojsonService, private twitterService: TwitterService) { }

  setRSS = () => {
    this.rssService.setUrl(this.RSS);
    this.getRSS();
  };

  public getRSS = () => {
    //console.log('asd');
    this.rssService.getActivities().subscribe(
      (response) => {
        //console.log(response);
        this.rssService.setData(response);
        //console.log(this.rssService.data);
      },
      (error) => (error.json())
    );
  };

  setYtName = () => {
    localStorage.setItem("ytchannelname", this.ytChannelName);
    this.getYoutubeId(this.ytChannelName);
  };

  getYoutubeId(id){
    this.youtubeService.getYoutubeId(id).subscribe(
      (response) => {
        //console.log(response);
        //console.log(this.rssService.data);
        this.youtubeService.userId = response.items[0].id;
        //console.log(this.youtubeService.userId);
        this.youtubeService.setData(response.items[0].id);
        //this.youtubeService.setData(this.youtubeService.getYoutubeSubs());
      },
      (error) => (error.json())

    );
  }
    // this.getChannelId();

  /*public getChannelId(){
    this.youtubeService.getYoutubeId().subscribe(
      (response) => {
        console.log(response);
        this.youtubeService.setData(response);
        //console.log(this.youtubeService.data);
        //this.youtubeService.userId = this.youtubeService.data.items[0].id;
        this.youtubeService.userId = JSON.stringify(response.items[0].id);
        //console.log(this.youtubeService.userId);
        //this.youtubeService.setData(this.youtubeService.channelId);
      },
      (error) => (error.json())

    );
  }*/

  setFbPage = () => {
  this.facebookService.setPage(this.FB);
  };

  setTwitterPage = () => {
    this.twitterService.setTwitterPage(this.TWITTER);
  };

  clearFbPages = () => {
    localStorage.removeItem("pages");
    location.reload();
  };

  clearTwitterPages = () => {
    localStorage.removeItem("pages2");
    location.reload();
  };

  ngOnInit() {
    this.getRSS();
    this.getYoutubeId(localStorage.getItem("ytchannelname"));
    //this.FB = localStorage.getItem("fbpage");
  }

}
