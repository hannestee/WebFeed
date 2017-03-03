import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SodexoService {

  constructor(private http: Http) { }

  private url: string = 'https://api.hel.fi/linkedevents/v1/';

  public getActivities = () => {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.url, options)
      .map(response => response.json());
  };


}
