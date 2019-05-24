import { Component } from '@angular/core';
import {BuscarService, SearchType} from '../services/buscar.service';
import {  OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ModalController} from '@ionic/angular';
import { ModalPagePage } from '../modal-page/modal-page.page';
import {ActivatedRoute} from '@angular/router';
import { RssService } from '../rss.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {rssDataArray:any=[];

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
