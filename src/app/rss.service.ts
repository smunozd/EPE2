import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/* import 'rxjs/add/operator/map'; */
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor(public http:Http) { 
    console.log('hola RssProvider Provider');
    this.GetRSS();
  }

  GetRSS()
  {
    const RSS_URL: any ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC05m1jT_pGm-DJKlpXsBYkA&api_key=9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p' /* 'http://www.megaconsolas.com/feeds/avances/' */; 
    /* const RSS_URL: any='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvandal.elespanol.com%2Fxml.cgi&api_key=9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p'  */
    const API: any = '9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p';
    const count: any = 20;
    const API_URL: any ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUC05m1jT_pGm-DJKlpXsBYkA&api_key=9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p'/* 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.3djuegos.com%2Funiverso%2Frss%2Frss.php&api_key=9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p' */ /* 'https://api.rss2json.com/v1/api.json'; */ 
   /* const API_URL: any='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvandal.elespanol.com%2Fxml.cgi&api_key=9yeyeqrbwnwmha6afdyyag6zt1rioi3vzwmtui6p' */
    const response= this.http.post(API_URL, {'rss_url' : RSS_URL, 'api_key' : API, 'count':count}).pipe(map(res =>res.json()));
    return response;
    
  }
}
