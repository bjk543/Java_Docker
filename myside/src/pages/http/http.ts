import { Component } from '@angular/core';

//import { Http } from '@angular/http';

//import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero } from './hero';


@Component({
  templateUrl: 'http.html'
})


export class ListHttp {

  heroes: Observable<Hero[]>;

  constructor(private http: Http) { }
  openMenu3() {


    this.heroes = this.openMenu4();
    console.log(this.heroes);
  }
  openMenu4(): Observable<Hero[]> {

    return this.http
      .get('hero.json').map(response => response.json().data as Hero[]);
  }

search(term: string): Observable<Hero[]> {
  console.log({term});
    return this.http
               .get('hero.json?name=${term}')
               .map(response => response.json().data as Hero[]);
               
  }


}