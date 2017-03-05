import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SodexoService {

  constructor(private http: Http) { }

  private rssToJson: string = ' https://api.rss2json.com/v1/api.json?rss_url='
  private url: string = 'http://www.iltalehti.fi/rss/rss.xml';

  public getActivities = () => {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.rssToJson + this.url, options)
      .map(response => response.json());
  };


}
