//https://codecraft.tv/courses/angular/http/http-with-observables/

import { Component, Injectable } from '@angular/core';
//import {BrowserModule} from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Http } from '@angular/http';

import { GlobalVariable } from '../globals';
import 'rxjs/Rx';

class SearchItem {

  constructor(
    public addresses: string[],
    public answers: string[],
    public amounts: string[],
    public withdrawAmount: string[],
    public counter: string,
    public addressesAll: string[],
    public amountsAll: string[],
    public answersAll: string[],
    public counterAll: string,
    public isEnd: boolean,
    public solCode: string,

  ) { }

}


@Injectable()
export class getContractInfoService {
  //http://localhost:8081/getContractInfo/localhost:8545/0xfad8d8be6ec23c2849786a2b52e0e3e139a4659d1f07bfe564a74be3b6ae5994
  results: SearchItem[];
  loading: boolean;
  status: number;
  response: string;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string, solName: string, solidity: string) {
    let promise = new Promise((resolve, reject) => {
      //let apiURL = `${this.apiRoot}${term}`;
      //0x2f55d5bae9c473434698b5a8003b60bd690975d2bd940ac64eadd91d8f17b2c8
      //[{"constant":true,"inputs":[],"name":"counterAll","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"bid2","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"finalA","type":"uint256"}],"name":"auctionEnd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"bid","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"getValue5","outputs":[{"name":"","type":"address[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"counter","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"finalAnswer","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ad","type":"address"}],"name":"getValue3","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"highestBidder","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"counter","type":"uint256"}],"name":"testMapping","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getValue4","outputs":[{"name":"","type":"address[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256"},{"name":"","type":"address[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256[500]"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"counterMax","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getValue2","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"highestBid","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"withdraw2","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"HighestBidIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"AuctionEnded","type":"event"}]
      if (term.length == 0) term = '0x2f55d5bae9c473434698b5a8003b60bd690975d2bd940ac64eadd91d8f17b2c8';
      //if (solidity.length == 0) solidity = '[{\"constant\":true,\"inputs\":[],\"name\":\"counterAll\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ended\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"num\",\"type\":\"uint256\"}],\"name\":\"bid2\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getValue\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"num\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"finalA\",\"type\":\"uint256\"}],\"name\":\"auctionEnd\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"beneficiary\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"num\",\"type\":\"uint256\"}],\"name\":\"bid\",\"outputs\":[],\"payable\":true,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getValue5\",\"outputs\":[{\"name\":\"\",\"type\":\"address[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"counter\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"finalAnswer\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"ad\",\"type\":\"address\"}],\"name\":\"getValue3\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBidder\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"counter\",\"type\":\"uint256\"}],\"name\":\"testMapping\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getValue4\",\"outputs\":[{\"name\":\"\",\"type\":\"address[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256[500]\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"counterMax\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getValue2\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"highestBid\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"withdraw2\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"bidder\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"HighestBidIncreased\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AuctionEnded\",\"type\":\"event\"}]';
      if (solidity.length == 0) solidity = 'contract SimpleAuction { uint256 public finalAnswer; address public beneficiary; uint256 public totalAmount; address public highestBidder; uint256 public highestBid; uint256 public counter; uint256 public counterAll; uint256 public counterMax; mapping(address => uint256) pendingReturns; bool public ended; event HighestBidIncreased(address bidder, uint256 amount); event AuctionEnded(address winner, uint256 amount); function SimpleAuction()  { beneficiary = msg.sender; counter=0; counterAll=0; counterMax=500; testMapping(counterMax); } function bid(uint256 num) payable { if (ended) throw; if (answered[msg.sender]) { throw; } if(counter==counterMax) throw;			 answered[msg.sender]=true; if(num==1){  totalAmount+=msg.value; everyoneAnswer[msg.sender]=num; everyoneAmount[msg.sender]=msg.value;		everyoneAnswerL[counter]=num; everyoneAmountL[counter]=msg.value; addressL[counter]=msg.sender;		counter++; everyNumAmount[num]+=msg.value; highestBidder = msg.sender; highestBid = msg.value; voteCounts2[0]=msg.sender; voteCounts[0]=msg.value; HighestBidIncreased(msg.sender, msg.value); } else{ everyoneAnswerLAll[counterAll]=num; everyoneAmountLAll[counterAll]=msg.value; addressLAll[counterAll]=msg.sender; counterAll++; } }function bid2(uint256 num) payable { HighestBidIncreased(msg.sender, msg.value); }function withdraw(uint256 num) returns (bool) { if (!ended) throw;  if(withdrawed[msg.sender])  throw; uint256 thisAmount = everyoneAmount[msg.sender]; var amount=uint256(0); for(uint i =0 ; i < counter;i++) { if(msg.sender==address(addressL[i])) { uint256 cccool; if(num%3==1) cccool=cool[i]; if(num%3==2) cccool=cool2[i]; if(num%3==0) cccool=cool3[i]; amount=((thisAmount*cccool)/100); everyoneWithdrawL[i]=amount; break; } } if (amount > 0) { withdrawed[msg.sender]=true; if (!msg.sender.send(amount)) { withdrawed[msg.sender]=false; return false; } } return true;} function withdraw2() returns (bool) { if (!ended) throw;  if(withdrawed[msg.sender])  throw; if(everyoneAnswer[msg.sender]!=finalAnswer) throw; uint256 thisAmount = everyoneAmount[msg.sender]; uint256 thisAnswerAmount = everyNumAmount[finalAnswer]; var amount = (totalAmount*thisAmount)/thisAnswerAmount; if (amount > 0) { withdrawed[msg.sender]=true; if (!msg.sender.send(amount)) { withdrawed[msg.sender]=false; return false; } } return true; } function auctionEnd(uint256 finalA) { if (ended) throw;  if(beneficiary != msg.sender) throw; ended = true; finalAnswer = finalA; voteCounts3[0]=ended; } function getValue2() returns (bool,bool,uint256,uint256)  { return (ended,withdrawed[msg.sender],finalAnswer,everyoneAnswer[msg.sender]); } function getValue() returns (bool,bool,bool,uint256,uint256)  { return (ended,withdrawed[msg.sender],answered[msg.sender], everyoneAmount[msg.sender],everyoneAnswer[msg.sender]); } function getValue3(address ad) returns (bool,bool,bool,uint256,uint256)  { return (ended,withdrawed[ad],answered[ad], everyoneAmount[ad],everyoneAnswer[ad]); } function getValue4() returns (address[500],uint256[500],uint256[500],uint256[500],uint256,address[500],uint256[500],uint256[500],uint256,bool)  { return ( addressL,everyoneAnswerL,everyoneAmountL,everyoneWithdrawL,counter, addressLAll,everyoneAmountLAll,everyoneAnswerLAll,counterAll,ended); } function getValue5() returns (address[500],uint256[500],uint256[500],uint256[500],uint256,bool)  { return (addressL,everyoneAnswerL,everyoneAmountL,everyoneWithdrawL,counter,ended); } mapping(uint256 => uint256) voteCounts; mapping(address => address) voteCounts2; mapping(uint256 => bool) voteCounts3; mapping(address => bool) answered; mapping(address => bool) withdrawed; mapping(address => uint256) everyoneAnswer; uint256[500] everyoneAnswerL; mapping(address => uint256) everyoneAmount; mapping(address => uint256) everyoneWithdraw; uint256[500] everyoneWithdrawL; uint256[500] everyoneAmountL; address[500] addressL; address[500] addressLAll; uint256[500] everyoneWithdrawLAll; uint256[500] everyoneAmountLAll;  uint256[500] everyoneAnswerLAll; mapping(uint256 => uint256) everyNumAmount;uint256[500] cool;uint256[500] cool2;uint256[500] cool3;function testMapping(uint counter) { /*  for(uint i=0;i<200;i++) { cool[	i	]=	0	; cool2[	i	]=	0	; cool3[	i	]=	0	; }*/ cool[	0	]=	190	; cool2[	0	]=	180	; cool2[	1	]=	175	; cool2[	2	]=	170	; cool2[	3	]=	165	; cool2[	4	]=	160	; cool3[	0	]=	170	; cool3[	1	]=	169	; cool3[	2	]=	168	; cool3[	3	]=	167	; cool3[	4	]=	166	; cool3[	5	]=	165 ; cool3[	6	]=	164	; cool3[	7	]=	163	; cool3[	8	]=	162	; cool3[	9	]=	161	; cool3[	10	]=	160	; cool3[	11	]=	159	; cool3[	12	]=	158	; cool3[	13	]=	157	; cool3[	14	]=	156	;}}';
      if (solName.length == 0) solName = 'SimpleAuction';
      //console.log(solidity);
      let apiURL = GlobalVariable.apiIP + GlobalVariable.getContractInfo + GlobalVariable.HttpProvider + term + '/' + solName;
      console.log(apiURL);
      this.http.get(apiURL)
        .toPromise()
        .then(
        res => { // Success
          console.log('res => { // Success ');
          //console.log('contractAddress ' + res.json().results[0].solCode);
          this.status = res.status;
          this.results = res.json().results.map(item => {

            return new SearchItem(
              item.addresses,
              item.answers,
              item.amounts,
              item.withdrawAmount,
              item.counter,
              item.addressesAll,
              item.amountsAll,
              item.answersAll,
              item.counterAll,
              item.isEnd,
              item.solCode,
            );
          });
          // this.results = res.json().results;
          resolve();
        },
        msg => { // Error
          console.log('msg => { // Error ');
          //console.log('contractAddress ' + msg.json().results[0].solCode);
          
          this.status = msg.status;
          this.response= msg;
          this.results =
            [new SearchItem(
              [],
              [],
              [],
              [],
              '',
              [],
              [],
              [],
              '',
              false,
              '',
            )];

          resolve();
        },

      );
    });
    return promise;
  }

}

@Component({
  selector: 'http2',
  templateUrl: 'getContractInfo.html'
})

export class getContractInfoComponent {
  private loading: boolean = false;

  constructor(private itunes: getContractInfoService) {
  }

  doSearch(term: string, solName: string, solidity: string) {
    this.loading = true;
    this.itunes.search(term, solName, solidity).then(_ => this.loading = false)

  }
}
