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

import './content.json';
class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string) {
  }
}

@Injectable()
export class SearchService2 {
  apiRoot: string = 'https://itunes.apple.com/search';

  constructor(private http: Http) {
  }

  search(term: string): Observable<SearchItem[]> {

    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    //let apiURL = `telnet://ptt.cc`;
    return this.http.get(apiURL)    
        .map(res => {
          console.log('resultCoun '+res.json().resultCount);
          console.log('results '+res.json().results);
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );
          });
        });
  }
}

@Component({
  selector: 'http-obs',
  templateUrl: 'httpObs.html'
})
export class HttpObs {
  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService2) {
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
/*
  doSearch(term: string) {
    this.itunes.search(term)
  }*/
}
/*
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [HttpObs],
  bootstrap: [HttpObs],
  providers: [SearchService2]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
*/