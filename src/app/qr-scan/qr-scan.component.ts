import { Component } from '@angular/core';
import { NgxScannerQrcodeModule, ScannerQRCodeConfig, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qr-scan',
  standalone: true,
  imports: [NgxScannerQrcodeModule],
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.css'
})
export class QrScanComponent {
  qrResult: any
  config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
    // canvasStyles: [
    //   { /* layer */
    //     lineWidth: 1,
    //     fillStyle: '#00950685',
    //     strokeStyle: '#00950685',
    //   },
    //   { /* text */
    //     font: '17px serif',
    //     fillStyle: '#ff0000',
    //     strokeStyle: '#ff0000',
    //   }
    // ],
  };
  constructor() {
  }

  onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    console.log(e);
    this.qrResult = JSON.stringify(e)
  }
}
