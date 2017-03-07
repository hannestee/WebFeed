import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {



  }


  setFb(){
    document.getElementsByTagName("iframe")[0].setAttribute("src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Filtalehti.fi&tabs=timeline&width=500&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId");
  }

}
