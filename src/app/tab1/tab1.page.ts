import { Component } from '@angular/core';
import { RssService } from 'src/app/rss.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
rssDataArray:any=[];

constructor (public rssProvider: RssService)
{

}
ionViewDidLoad(){
  this.Get_RSS_Data()
}

Get_RSS_Data(){
  this.rssProvider.GetRSS().subscribe(
    data => {this.rssDataArray = data;} )
}

}
