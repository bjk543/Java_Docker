//https://codecraft.tv/courses/angular/http/http-with-observables/

import { Component, Injectable } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';

import { GlobalVariable } from '../globals';
import 'rxjs/Rx';

class SearchItem {

  constructor(
    public blockHash: string,
    public blockNumber: number,
    public from: string,
    public gas: number,
    public gasPrice: string,
    public hash: string,
    public input: string,
    public nonce: number,
    public to: string,
    public transactionIndex: number,
    public value: string,
    public v: string,
    public r: string,
    public s: string,

  ) { }

}
class SearchItem2 {

  constructor(
    public contractAddress: string,

  ) { }

}

@Injectable()
export class getTransactionService {
  //http://localhost:8081/getTransaction/localhost:8545/0xfad8d8be6ec23c2849786a2b52e0e3e139a4659d1f07bfe564a74be3b6ae5994
  apiRoot: string = 'http://192.168.17.106:8081/getTransaction/localhost:8545/';
  apiRoot2: string = 'http://192.168.17.106:8081/getTransactionReceipt/localhost:8545/';
  results: SearchItem[];
  loading: boolean;
  status: number;
  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    //console.log('GlobalVariable.hashTest' + GlobalVariable.hashTest);
    let promise = new Promise((resolve, reject) => {
      //let apiURL = `${this.apiRoot}${term}`;
      let apiURL = GlobalVariable.apiIP + GlobalVariable.getTransaction + GlobalVariable.HttpProvider + term;
      console.log(apiURL);
      
      //console.log('apiURL ' + apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
        res => { // Success
          this.status = res.status;
          //console.log('status ' + res.json().status);
          //console.log('resultCount ' + res.json().resultCount);
          this.results = res.json().results.map(item => {
            //this.results = res.json().data[0].Transactions.map(item => {
            return new SearchItem(
              item.blockHash,
              item.blockNumber,
              item.from,
              item.gas,
              item.gasPrice,
              item.hash,
              item.input,
              item.nonce,
              item.to,
              item.transactionIndex,
              item.value,
              item.s,
              item.v,
              item.r,
            );
          });
          // this.results = res.json().results;
          resolve();
        },
        msg => { // Error
          this.status = msg.status;
          this.results = [new SearchItem(
            '',
            0,
            '',
            0,
            '',
            '',
            '',
            0,
            '',
            0,
            '',
            '',
            '',
            '',
          )];
          //reject(msg);
          resolve();
        },
      );
    });
    return promise;
  }

}

@Injectable()
export class getTransactionReceiptService {
  //http://localhost:8081/getTransaction/localhost:8545/0xfad8d8be6ec23c2849786a2b52e0e3e139a4659d1f07bfe564a74be3b6ae5994
  apiRoot: string = 'http://192.168.17.106:8081/getTransaction/localhost:8545/';
  apiRoot2: string = 'http://192.168.17.106:8081/getTransactionReceipt/localhost:8545/';
  results: SearchItem2[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search2(term: string) {
    //console.log('GlobalVariable.hashTest' + GlobalVariable.hashTest);
    let promise = new Promise((resolve, reject) => {
      let apiURL = GlobalVariable.apiIP + GlobalVariable.getTransactionReceipt + GlobalVariable.HttpProvider + term;
console.log(apiURL);
      //console.log('apiURL ' + apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
        res => { // Success
          //console.log('res.json().results[0].contractAddress ' + res.json().results[0].contractAddress);
          //console.log('contractAddress ' + res.json().results[0].contractAddress);
          this.results = res.json().results.map(item => {
            //this.results = res.json().data[0].Transactions.map(item => {
            //console.log('Success');
            //console.log('item' + item);
            var add = '';
            if (item != null) add = item.contractAddress;
            return new SearchItem2(
              add,
            );
          });
          // this.results = res.json().results;
          resolve();
        },
        msg => { // Error
          //console.log('Error');
          this.results = [new SearchItem2(
            '',
          )];
          resolve();
          //reject(msg);

        }
        );
    });
    return promise;
  }
}
@Component({
  selector: 'http2',
  templateUrl: 'getTransaction.html'
})

export class getTransactionComponent {
  private loading: boolean = false;

  constructor(private itunes: getTransactionService, private itunes2: getTransactionReceiptService) {
  }

  doSearch(term: string) {
    //console.log('doSearch GlobalVariable.hashTest' + GlobalVariable.hashTest);
    this.loading = true;
    if (term.length == 0) term = GlobalVariable.hashTest;
    //console.log('term' + term);
    this.itunes.search(term).then(_ => this.loading = false)
    this.itunes2.search2(term).then(_ => this.loading = false)
  }
}
