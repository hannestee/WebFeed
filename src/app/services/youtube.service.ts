import {Injectable, EventEmitter} from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class YoutubeService {

  constructor(private http: Http) {

  }

  private url_activities: string = 'https://www.googleapis.com/youtube/v3/activities';
  private url_subs: string = 'https://www.googleapis.com/youtube/v3/subscriptions';
  private url_channels: string = 'https://www.googleapis.com/youtube/v3/channels';
  private API_KEY: string = 'AIzaSyASRHawVhbWxXn4ha7Dg3phpLqTxknpyF8';
  data: any = [];
  channelId: string = 'UC9mG6ja6NiQ71BamUtBlhyw'; //default
  pageToken: string = '';
  userId: string = 'UC9mG6ja6NiQ71BamUtBlhyw';
  public nameupdated: EventEmitter<any> = new EventEmitter();

  public getActivities(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('part', 'snippet, id, contentDetails');
    params.set('channelId', this.channelId);
    params.set('maxResults', '1');
    params.set('pageToken', this.pageToken);

    return this.http.get(this.url_activities, {
      search: params
    }).map(response => response.json())
  };

  public getYoutubeSubs(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('part', 'snippet');
    params.set('channelId', this.userId);
    params.set('maxResults', '50');

    return this.http.get(this.url_subs, {
      search: params
    }).map(response => response.json())
  };

  public getYoutubeId(name){
    let params: URLSearchParams = new URLSearchParams();
    params.set('key', this.API_KEY);
    params.set('part', 'id,snippet,contentDetails');
    params.set('forUsername', name);

    return this.http.get(this.url_channels, {
      search: params
    }).map(response => response.json())
  };

  public setData = (data) => {
    this.data = data;
    console.log(this.data);
    this.nameupdated.emit(this.data);
    //console.log(this.data);
  };

}
