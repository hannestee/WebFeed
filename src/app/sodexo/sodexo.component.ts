import { Component, OnInit } from '@angular/core';
import {SodexoService} from "../services/sodexo.service";

@Component({
  selector: 'app-sodexo',
  templateUrl: './sodexo.component.html',
  styleUrls: ['./sodexo.component.scss']
})
export class SodexoComponent implements OnInit {

  private data: any = [];

  constructor(private sodexoService: SodexoService) { }

  ngOnInit() {
  console.log('asd');
    this.sodexoService.getActivities().subscribe(
      (response) => {
        console.log(response);
        this.data = response;
        console.log(this.data);
      },
      (error) => (error.json())
    );

  }

}
