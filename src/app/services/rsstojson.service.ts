import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class RsstojsonService {

  private rssToJSON: string = 'http://www.iltalehti.fi/rss/rss.xml';

  constructor() { }


}
