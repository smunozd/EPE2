import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RssService } from './rss.service';
import { HttpModule } from '@angular/http'
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import {ModalPagePage} from '../app/modal-page/modal-page.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent,ModalPagePage],
  entryComponents: [ModalPagePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RssService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
