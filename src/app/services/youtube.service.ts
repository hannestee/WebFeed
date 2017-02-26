import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";

@Injectable()
export class YoutubeService {

  constructor(private http: Http) {

  }

  private url: string = 'https://www.googleapis.com/youtube/v3/activities';
  private API_KEY: string = 'AIzaSyASRHawVhbWxXn4ha7Dg3phpLqTxknpyF8';
  private data: any = [];


  public getActivities(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('appid', this.API_KEY);
    params.set('part', 'snippet');

    return this.http.get(this.url, {
      search: params
    }).subscribe(
        (response) => (console.log(response.json())),
        (error) => (error.json())
    );
  };
}
