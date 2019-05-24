import { Component, OnInit } from '@angular/core';
import { RssService } from '../rss.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalPagePage } from '../modal-page/modal-page.page';

@Component({
  selector: 'app-tabs4',
  templateUrl: './tabs4.page.html',
  styleUrls: ['./tabs4.page.scss'],
})
export class Tabs4Page {rssDataArray:any=[];

  constructor (public rssProvider: RssService, public modal:ModalController,public activatedRoute:ActivatedRoute)
  {
  
  }
  ionViewDidLoad(){
    this.Get_RSS_Data()
    Response
  }
 
  test2(){
    
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

