import { Component, OnInit } from '@angular/core';
import {RsstojsonService} from "../services/rsstojson.service";

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  private page;
  private data: any = [];

  private pages: any = [];


  constructor(private facebookService: RsstojsonService) { }

  ngOnInit() {
    //this.pages.localStorage.getItem("pages");
    // this.pages.push('Ted');
    //
    // this.facebookService.pageupdated.subscribe(
    //   data => {
    //
    //     this.pages.push(this.facebookService.data);
    //     this.page = this.facebookService.data;
    //     this.setFb(this.page);
    //     console.log(this.pages);
    //
    //   }
    // )
  }

  setFb(page){
    document.getElementsByTagName("iframe")[0].setAttribute("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F"+page+"&tabs=timeline&width=500&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId");

  }


  newButton(){

  }

}
