import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertController } from 'ionic-angular';
@Component({
  templateUrl: 'barcode.html'
})
export class MyBarcode {

  constructor(private alertCtrl: AlertController,private barcodeScanner: BarcodeScanner) { }

  openMenu3() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      this.presentAlert(barcodeData.text+" "+barcodeData.format);
      
    }, (err) => {
      // An error occurred
    });
  }

  presentAlert(test) {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: test,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}