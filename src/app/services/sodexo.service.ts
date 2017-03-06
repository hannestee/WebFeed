import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {SodexoComponent} from "../sodexo/sodexo.component";

//rss-service

@Injectable()
export class SodexoService {



  constructor(private http: Http) { }

  private rssToJson: string = ' https://api.rss2json.com/v1/api.json?rss_url='
  private url: string = 'http://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss';
  public dataupdated: EventEmitter<any> = new EventEmitter();
  public data: any = [];

  public setUrl (url) {
    this.url = url;
    console.log(this.url);
    //this.rss.ngOnInit();
  }


  public getActivities = () => {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.get(this.rssToJson + this.url, options)
      .map(response => response.json());
  };

  public setData = (data) => {
    this.data = data;
    this.dataupdated.emit(this.data);
    //console.log(this.data);
  };




}
