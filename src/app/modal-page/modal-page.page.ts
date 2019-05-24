import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';


/* import { Transform } from 'stream'; */

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage implements OnInit {
  linkTab2:any;
  
  constructor(public navcontroller: NavController, public modal:ModalController,public activatedRoute:ActivatedRoute,public sanitizer:DomSanitizer) { 
  
  
  this.linkTab2 = [
    {url:"https://www.youtube.com/embed/8tQFOgRXDRE‎"},
    {url:"https://www.youtube.com/embed/UE1f2cdwks0‎"},
    {url:"https://www.youtube.com/embed/uCJigVAV2Jk‎"},
    {url:"https://www.youtube.com/embed/EINRqHQb8xo"},
    {url:"https://www.youtube.com/embed/93odUzjH_sw"},
    {url: "https://www.youtube.com/embed/SEHmS-dvicU"},
    {url: "https://www.youtube.com/embed/TUHNhubLXWA"},
    {url: "https://www.youtube.com/embed/gFLsWMBUX7c"},
    {url: "https://www.youtube.com/embed/1yO9Z3zKOj0"},
    {url:"https://www.youtube.com/embed/W5nLxF-l_Bc"},

  ]
}
url1:any;
i:any=0;
urlF(){
  for (this.i=0; this.i<10;this.i++) {
    this.url1=this.linkTab2;
    return this.linkTab2
    console.log(this.i,this.url1,this.linkTab2)
}
}
  ngOnInit() {
    this.urlF()
    /* this.link=
  this.activatedRoute.snapshot.paramMap.get('link1');
  this.transform(this.link);
  console.log(this.link); */

  }
  /* test2(){
    this.transform(this.link);
    console.log(this.url1)
  } */
  cerrar(){
  
    this.modal.dismiss();
    
  }
}
