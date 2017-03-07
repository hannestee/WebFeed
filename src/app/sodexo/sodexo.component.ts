import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {SodexoService} from "../services/sodexo.service";

@Component({
  selector: 'app-sodexo',
  templateUrl: './sodexo.component.html',
  styleUrls: ['./sodexo.component.scss']
})
export class SodexoComponent implements OnInit {


  private data: any = [];
  //private div = document.createElement("div");
  private html: any ='';
  constructor(private sodexoService: SodexoService) { }

  ngOnInit() {
    this.sodexoService.dataupdated.subscribe(
      data => {

        this.data = this.sodexoService.data;
        //console.log("moro");
        //this.div.innerHTML = this.data;
        //this.parsehtml(this.data.items);
        //console.log(this.data.items[0].content);
      }
    )
  }

  /*parsehtml (array){
    for (let i=0; i < array.length; i++){
      this.html = JSON.stringify(array.content);
    }
  }*/


}
