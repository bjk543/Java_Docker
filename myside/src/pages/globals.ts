/*
import { Injectable } from '@angular/core';
@Injectable()
export class Globals {
  role: string = 'test';
  // localhost 192.168.5.74
  apiIP: string = 'http://localhost:8081/';
  HttpProvider: string = 'localhost:8545/';
  apiRoot: string = '/blockchain/selectByJoinBlocks';
  getTransaction: string = 'getTransaction/';
  getTransactionReceipt: string = 'getTransactionReceipt/';
}


//providers (forwardRef(() => Globals)),
*/
export const GlobalVariable = Object.freeze({
  //192.168.17.108  localhost 192.168.5.74
  apiIP: 'http://192.168.0.102:8081/',
  HttpProvider: '192.168.0.102:8545/',  
  DBURL: 'http://192.168.0.102:8096/',  
  getTransaction: 'getTransaction/',
  SendRawTransaction: 'SendRawTransaction/',
  getTransactionReceipt: 'getTransactionReceipt/',
  getContractInfo : 'getContractInfo/',
  getBalance:'getBalance/',
  addParameter:'addParameter/',
  sha3:'sha3/',
  hashTest:'0x2f55d5bae9c473434698b5a8003b60bd690975d2bd940ac64eadd91d8f17b2c8',
});