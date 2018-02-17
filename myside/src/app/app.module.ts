import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListPage3 } from '../pages/list3/list3';
import { ListHttp } from '../pages/http/http';
import { AppComponent } from '../pages/http2/http2';
import { TransactionComponent } from '../pages/Transaction/Transaction';
import { TransactionService } from '../pages/Transaction/Transaction';
import { getTransactionService } from '../pages/getTransaction/getTransaction';
import { getTransactionComponent } from '../pages/getTransaction/getTransaction';
import { getContractInfoService } from '../pages/getContractInfo/getContractInfo';
import { getBalanceService } from '../pages/getBalance/getBalance';
import { getContractInfoComponent } from '../pages/getContractInfo/getContractInfo';
import { getBalanceComponent } from '../pages/getBalance/getBalance';

import { sendTransactionService } from '../pages/sendTransaction/sendTransaction';
import { sendTransactionComponent } from '../pages/sendTransaction/sendTransaction';
import { getTransactionReceiptService } from '../pages/getTransaction/getTransaction';

import { HttpObs } from '../pages/httpObs/httpObs';
import { HttpObs2 } from '../pages/httpObs2/httpObs2';
import { HttpObs3 } from '../pages/httpObs3/httpObs3';
import { HttpJObs } from '../pages/httpJObs/httpJObs';

import { JsonpModule, Jsonp } from '@angular/http';

import { MyCamera } from '../pages/camera/camera';
import { MyBarcode } from '../pages/barcode/barcode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

//import { Component, Injectable} from '@angular/core';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import { Http, Response} from '@angular/http';
//import { Http} from '@angular/http';
import 'rxjs/Rx';
import { SearchService } from '../pages/http2/http2';
import { SearchService2 } from '../pages/httpObs/httpObs';
import { SearchService22 } from '../pages/httpObs2/httpObs2';
import { SearchService3 } from '../pages/httpObs3/httpObs3';
import { SearchService2J } from '../pages/httpJObs/httpJObs';

//import { forwardRef } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    TransactionComponent,
    getTransactionComponent,
    getContractInfoComponent,
    getBalanceComponent,
    sendTransactionComponent,
    HomePage,
    ListPage,
    ListPage3,
    ListHttp,
    AppComponent,

    HttpObs,
    HttpObs2,
    HttpObs3,
    HttpJObs,
    MyCamera,
    MyBarcode
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    HttpModule,

    BrowserModule,
    FormsModule,
    JsonpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListPage3,
    ListHttp,
    AppComponent,
    TransactionComponent,
    getTransactionComponent,
    getContractInfoComponent,
    getBalanceComponent,
    sendTransactionComponent,
    HttpObs,
    HttpObs2,
    HttpObs3,
    HttpJObs,
    MyCamera,
    MyBarcode
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    Transfer,
    Camera,
    BarcodeScanner,
    FilePath,
    TransactionService,
    sendTransactionService,
    getTransactionService,
    getContractInfoService,
    getBalanceService,
    getTransactionReceiptService,
    SearchService,
    SearchService2,
    SearchService22,
    SearchService3,
    SearchService2J,
    //(forwardRef(() => Globals)),
    JsonpModule,
    Jsonp,
  ]
})
export class AppModule { }
