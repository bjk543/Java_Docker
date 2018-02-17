import { Component, Injectable} from '@angular/core';
//import {HttpModule, Http, Response} from '@angular/http';
//import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import { Http} from '@angular/http';
import { FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { GlobalVariable } from '../globals';

class SearchItem {
  /*constructor(public transHash: string,
              ) {
  }*/
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

@Injectable()
export class SearchService22 {
  
//apiRoot: string = 'https://itunes.apple.com/search';
  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchItem[]> {
    console.log(GlobalVariable.DBURL);
    let apiURL = GlobalVariable.DBURL + `find/Transactions/{"blockHash":{"$regex":"`+`${term}`+`"}}`;
    console.log(apiURL);
    
    //let apiURL = `http://localhost:8083/find/Transactions/{"blockHash":{"$regex":"`+`${term}`+`"}}`;
    console.log(apiURL);
    return this.http.get(apiURL)    
        .map(res => {
          console.log('status '+res.json().status);
          console.log('description '+res.json().description);
          return res.json().map(item => {
            /*return new SearchItem(
                item.blockHash,
                
            );*/
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
        });
  }
}

@Component({
  selector: 'http-obs2',
  templateUrl: 'httpObs2.html'
})
export class HttpObs2 {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService22) {
  }
  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(_ => this.loading = true)
        .switchMap(term => this.itunes.search(term))
        .do(_ => this.loading = false)
  }
}
