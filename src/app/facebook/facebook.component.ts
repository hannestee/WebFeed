import {Component, OnInit, OnChanges} from '@angular/core';
import {RsstojsonService} from "../services/rsstojson.service";
import {queue} from "rxjs/scheduler/queue";

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit, OnChanges {

  private page;
  private pages: any = [];
  private pagesStorage: any = [];

  constructor(private facebookService: RsstojsonService) { }

  ngOnInit() {
    this.pagesStorage = JSON.parse(localStorage.getItem("pages"));
    if (this.pagesStorage != null) {

      //console.log(this.pagesStorage.length);
      for (let i = 0; i < this.pagesStorage.length; i++) {
        this.pages.push(this.pagesStorage[i]);
        //console.log(this.pages);
        //console.log(this.pagesStorage);
      }
    }

    this.facebookService.pageupdated.subscribe(
      data => {
        if (this.pages.length >= 18){
          this.pages.splice(0, 1);
        }

        this.pages.push(this.facebookService.data);
        localStorage.setItem("pages", JSON.stringify(this.pages));
        this.page = this.facebookService.data;
        this.setFb(this.page);
        //console.log(this.pages);
      }
    )
  }

  ngOnChanges(){
  }

  setFb(page){
    document.getElementsByTagName("iframe")[0].setAttribute("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F"+page+"&tabs=timeline&width=500&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId");

  }

}
