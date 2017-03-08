//rrstojson service = facebook service


import {Injectable, EventEmitter} from '@angular/core';
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class RsstojsonService {


  public data: any = [];

  public pageupdated: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public setPage = (data) => {
    this.data = data;
    //this.pageupdated.emit(this.data);
    //console.log(this.data);
  };

}
