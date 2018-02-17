//https://codecraft.tv/courses/angular/http/http-with-observables/

import { Component, Injectable } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';

import { GlobalVariable } from '../globals';
import 'rxjs/Rx';

class SearchItem {

  constructor(

    public balance: string,
    public solCode: string,
    public solInterface: string,
    public privateKey: string,
    public address: string,

  ) { }

}


@Injectable()
export class getBalanceService {
  //http://localhost:8081/getBalance/localhost:8545/0xfad8d8be6ec23c2849786a2b52e0e3e139a4659d1f07bfe564a74be3b6ae5994
  results: SearchItem[];
  loading: boolean;
  status: number;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(option: string, term: string) {
    console.log('term ' + term);
    let promise = new Promise((resolve, reject) => {
      //console.log(solidity);

      //let apiURL = GlobalVariable.apiIP + GlobalVariable.getBalance + GlobalVariable.HttpProvider + term + '/';
      let apiURL = GlobalVariable.apiIP + option + '/' + GlobalVariable.HttpProvider + term + '/';
      if(option=='genWallet')
      {
        apiURL = GlobalVariable.apiIP + option;
      }
      console.log(apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
        res => { // Success

          this.status = res.status;
          //console.log(res.json().results[0].balance);
          this.results = res.json().results.map(item => {

            return new SearchItem(
              item.balance,
              item.solCode,
              item.solInterface,
              item.privateKey,
              item.address,
            );
          });
          // this.results = res.json().results;
          resolve(res.json().results[0].balance);
        },
        msg => { // Error
          console.log(msg);
          this.status = msg.status;
          this.results = [new SearchItem(
            msg,
            '',
            '',
            '',
            '',
          )];
          //reject(msg);
          resolve(msg);
        },

      );
    });
    return promise;
  }

}

@Component({
  selector: 'http2',
  templateUrl: 'getBalance.html'
})

export class getBalanceComponent {
  private loading: boolean = false;

  constructor(private itunes: getBalanceService) {
  }

  doSearch(option: string, address: string) {
    this.loading = true;
    console.log('option ' + option);
    console.log('address ' + address);

    if (address.length == 0) address = '0x02ba20b4aab95b1b9b5fe724d829f592f163abec';
    if (option.length == 0) option = 'getBalance';
    this.itunes.search(option, address).then(_ => this.loading = false)

  }

}
