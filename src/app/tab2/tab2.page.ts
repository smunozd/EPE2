import { Component } from '@angular/core';
import { RssService } from 'src/app/rss.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import {ModalController, NavController} from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import {ActivatedRoute} from '@angular/router';
/* import { url } from 'inspector';
import { link } from 'fs'; */
/* import { link } from 'fs'; */
/* import {ModalPagePage} from '../modal-page/modal-page.page'; */

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {rssDataArray:any=[];

  constructor (public rssProvider: RssService,public navcontroller: NavController, public youtube: YoutubeVideoPlayer, public modal:ModalController,public activatedRoute:ActivatedRoute)
  {
  
  }
  ionViewDidLoad(){
    this.Get_RSS_Data()
    Response
  }
 
  test(){
    window.location.reload(true)
  }
  
  link1:any;
  url:any=[];
async abreModal(){

const miModal= await this.modal.create({component:ModalPagePage,/* componentProps: {
  'url': data.link,
  
} */});
return await miModal.present();

}
cerrar(){
  
  this.modal.dismiss();
  
}
  Get_RSS_Data(){
    this.rssProvider.GetRSS().subscribe(
      data => {this.rssDataArray = data;console.log(data)} )
      
  }
  ngOnInit(){
    this.Get_RSS_Data();
    Response
  }
  }
