import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class TwitterService {

  constructor() { }

  public data: any = [];

  public pageupdated: EventEmitter<any> = new EventEmitter();

  public setTwitterPage = (data) => {
    this.data = data;
    this.pageupdated.emit(this.data);
    //console.log(this.data);
  };

}
