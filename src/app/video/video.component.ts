import {Component, OnInit, trigger, transition, style, animate, ChangeDetectorRef} from '@angular/core';
import {YoutubeService} from "../services/youtube.service";

type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-video',
  animations: [
    trigger(
      "testAnimation",
    [
      transition("void => prev",
        [
          style({
            left: -100,
            opacity: 0.0,
            zIndex: 2
          }),
          animate(
            "200ms ease-in-out",
            style({
              left: 0,
              opacity: 1.0,
              zIndex: 2
            })
          )
          ]
      ),
      transition(
        "prev => void", // ---> Leaving --->
        [
          animate(
            "200ms ease-in-out",
            style({
              left: 100,
              opacity: 0.0
            })
          )
        ]
      ),
      transition(
      "void => next", // <--- Entering <---
      [
        // In order to maintain a zIndex of 2 throughout the ENTIRE
        // animation (but not after the animation), we have to define it
        // in both the initial and target styles. Unfortunately, this
        // means that we ALSO have to define target values for the rest
        // of the styles, which we wouldn't normally have to.
        style({
          left: 100,
          opacity: 0.0,
          zIndex: 2
        }),
        animate(
          "200ms ease-in-out",
          style({
            left: 0,
            opacity: 1.0,
            zIndex: 2
          })
        )
      ]
      ),
      transition(
        "next => void", // <--- Leaving <---
        [
          animate(
            "200ms ease-in-out",
            style({
              left: -100,
              opacity: 0.0
            })
          )
        ]
      )
    ]
  )
    ],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  private items: any = [];
  private videoId: any = [];
  private subs: any = [];
  private nextpage: any = [];
  public orientation: Orientation;
  private changeDetectorRef: ChangeDetectorRef;

  constructor(private youtubeService: YoutubeService, changeDetectorRef: ChangeDetectorRef) {

    this.changeDetectorRef = changeDetectorRef;
    this.orientation = "none";

  }

  ngOnInit() {

    this.youtubeService.getActivities().subscribe(
      (response) => {
        console.log(response);
        this.nextpage = response;
        //console.log(this.pagetoken.nextPageToken);
        this.items = response.items;
        this.videoId = 'http://www.youtube.com/embed/' + this.items[0].contentDetails.upload.videoId;
        //console.log(this.videoId);
      },
          (error) => (error.json())

    );

    this.youtubeService.getYoutubeSubs().subscribe(
      (response) => {
        //console.log(response);
        this.subs = response.items;
        //console.log(this.subs );
      },
      (error) => (error.json())

    );
  }


  setChannel(channel){
    this.youtubeService.channelId = channel;
    //console.log(this.youtubeService.channelId);
    this.ngOnInit();

  }

  nextVideo(){
    this.youtubeService.pageToken = this.nextpage.nextPageToken;
    this.videoId = 'http://www.youtube.com/embed/' + this.youtubeService.pageToken;
    console.log(this.youtubeService.pageToken);
    this.ngOnInit();
  }

  public showNextFriend() : void {
    this.orientation = "next";
    this.changeDetectorRef.detectChanges();
  }

}
