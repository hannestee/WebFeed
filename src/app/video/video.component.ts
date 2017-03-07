import {Component, OnInit, OnChanges, trigger, state, style, animate, transition, Input} from '@angular/core';
import {YoutubeService} from "../services/youtube.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  animations: [
    trigger('visibilityChanged2', [
      state('shown' , style({ opacity: 1, transform: 'translateY(0%)'})),
      state('hidden', style({ opacity: 0, transform: 'translateY(100%)', display: 'none' })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class VideoComponent implements OnInit {
  @Input() isVisible2 : boolean = true;
  visibility2 = 'shown';
  ngOnChanges() {
    this.visibility2 = this.isVisible2 ? 'shown' : 'hidden';
  }

  private items: any = [];
  private state: any;
  private videoId: any = [];
  private subs: any = [];
  private nextpage: any = [];

  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit() {
    this.getActivities();
    this.getYoutubeSubs();
  }

  getYoutubeSubs(){
    this.youtubeService.getYoutubeSubs().subscribe(
      (response) => {
        //console.log(response);
        this.subs = response.items;
        //console.log(this.subs );
      },
      (error) => (error.json())

    );
  }


  getActivities(){
    this.youtubeService.getActivities().subscribe(
      (response) => {
        //console.log(response);
        this.nextpage = response;
        //console.log(JSON.stringify(this.items.snippet));
        //console.log(this.pagetoken.nextPageToken);
        this.items = response.items;
        //console.log(this.items[0].snippet.type)
        this.checkType(this.items[0].snippet.type);
        //console.log(this.videoId)// ;
      },
      (error) => (error.json())


    );
  }



  setChannel(channel){
    this.youtubeService.channelId = channel;
    //console.log(this.youtubeService.channelId);
    this.youtubeService.pageToken = '';
    this.ngOnInit();

  }

  nextVideo(){
    this.youtubeService.pageToken = this.nextpage.nextPageToken;
    this.videoId = 'http://www.youtube.com/embed/' + this.youtubeService.pageToken;
    //console.log(this.youtubeService.pageToken);
    this.state = 'next';
    this.ngOnInit();
  }

  previousVideo(){
    this.youtubeService.pageToken = this.nextpage.prevPageToken;
    this.videoId = 'http://www.youtube.com/embed/' + this.youtubeService.pageToken;
    //console.log(this.youtubeService.pageToken);
    this.state = 'prev';
    this.ngOnInit();
  }

  checkType(type){
    if (type != 'upload' && this.state == 'next') {
      this.youtubeService.pageToken = this.nextpage.nextPageToken;
      this.ngOnInit();
    } else if (type != 'upload' && this.state == 'prev'){
      this.youtubeService.pageToken = this.nextpage.prevPageToken;
      this.ngOnInit();
    } else {
      //console.log('asd');
      this.videoId = 'http://www.youtube.com/embed/' + this.items[0].contentDetails.upload.videoId;
    }
  }

}
