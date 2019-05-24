import { Component, OnInit } from '@angular/core';
import { ModalPagePage } from '../modal-page/modal-page.page';
import { RssService } from '../rss.service';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs6',
  templateUrl: './tabs6.page.html',
  styleUrls: ['./tabs6.page.scss'],
})
export class Tabs6Page {rssDataArray:any=[];

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
