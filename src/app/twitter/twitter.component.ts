import {Component, OnInit, ElementRef, AfterViewInit, ViewChild, Renderer} from '@angular/core';
import {TwitterService} from "../services/twitter.service";
import {WindowReference} from '../window-reference';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit, AfterViewInit{
  @ViewChild('myContainer') container: ElementRef;


  private data;
  private page;
  private pages: any = [];
  private pagesStorage: any = [];
  private win = WindowReference.get();

  constructor(private twitterService: TwitterService, private elementRef: ElementRef, private renderer:Renderer) { }

  ngOnInit() {
    this.pagesStorage = JSON.parse(localStorage.getItem("pages2"));
    if (this.pagesStorage != null) {
      console.log(this.pagesStorage[0]);
      this.setTwitter(this.pagesStorage[0]);
      //console.log(this.pagesStorage.length);
      for (let i = 0; i < this.pagesStorage.length; i++) {
        this.pages.push(this.pagesStorage[i]);
        //console.log(this.pages);
        //console.log(this.pagesStorage);
      }
    }

    this.twitterService.pageupdated.subscribe(
      data => {
        if (this.pages.length >= 18){
          this.pages.splice(0, 1);
        }

        this.pages.push(this.twitterService.data);
        localStorage.setItem("pages2", JSON.stringify(this.pages));

        this.page = this.twitterService.data;
        this.setTwitter(this.page);
        //console.log(this.pages);)

      }
    )
  }

  setTwitter(page){
    document.getElementById('twitter').innerHTML = '';
    //document.getElementsByClassName("twitter-timeline")[0].setAttribute("href", "https://twitter.com/"+page+"");
    //console.log(document.getElementsByClassName("twitter-timeline")[0]);
    /*this.container.nativeElement.href = ("https://twitter.com/test");
    console.log(this.container.nativeElement);
    console.log(this.win.twttr);
    this.win.twttr.widgets.load();*/
    this.win.twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: page
      },
      document.getElementById('twitter'),
      {
        width: '600',
        height: '600',
        related: 'twitterdev,twitterapi'
      }).then(function (el) {
      console.log('Embedded a timeline.')
    });
  }

  ngAfterViewInit(){
    //console.log(this.container.nativeElement);
  //this.data = this.container.nativeElement;
  //this.container.nativeElement.setAttribute("href", "https://twitter.com/test");
  }

}
