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
  currentDevice: any;
  hasPermission: boolean;
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
    this.currentDevice = null
    this.hasPermission = false
  }
  clearResult(): void {
    this.qrResult = null;
  }

  //Scans the QR code
  onCodeResult(resultString: string): void {
    this.qrResult = JSON.parse(resultString);
  }

  //Permission for the app to use the device camera
  onHasPermission(has: boolean): void {
    0
    this.hasPermission = has;
  }

  onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    console.log(e);
    this.qrResult = JSON.stringify(e)
  }

  checkQRJSON(qrString: string): boolean {
    if (
      /^[\],:{}\s]*$/.test(
        qrString
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
}
