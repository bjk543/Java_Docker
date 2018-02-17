import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPage3 } from '../pages/list3/list3';
import { ListHttp } from '../pages/http/http';
import { AppComponent } from '../pages/http2/http2';
import { HttpObs } from '../pages/httpObs/httpObs';
import { HttpObs2 } from '../pages/httpObs2/httpObs2';
import { HttpObs3 } from '../pages/httpObs3/httpObs3';
//import { HttpJObs } from '../pages/httpJObs/httpJObs';

import { MyCamera } from '../pages/camera/camera';
import { MyBarcode } from '../pages/barcode/barcode';

import { TransactionComponent } from '../pages/Transaction/Transaction';
import { getTransactionComponent } from '../pages/getTransaction/getTransaction';
import { getContractInfoComponent } from '../pages/getContractInfo/getContractInfo';
import { getBalanceComponent } from '../pages/getBalance/getBalance';

import { sendTransactionComponent } from '../pages/sendTransaction/sendTransaction';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Transaction', component: TransactionComponent },
      { title: 'getTransaction', component: getTransactionComponent },
      { title: 'getTransactionHttpObs2', component: HttpObs2 },
      { title: 'getContractInfo', component: getContractInfoComponent },
      { title: 'sendTransaction', component: sendTransactionComponent },
      { title: 'getBalance', component: getBalanceComponent },
      { title: 'Camera', component: MyCamera },
      { title: 'Barcode', component: MyBarcode },

      { title: 'List', component: ListPage },
      { title: 'List3', component: ListPage3 },
      { title: 'http', component: ListHttp },
      { title: 'AppComponent', component: AppComponent },
      { title: 'HttpObs', component: HttpObs },
      
      { title: 'HttpObs3', component: HttpObs3 },
      //{ title: 'HttpJObs', component: HttpJObs },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
