import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-qr-scan',
  standalone: true,
  imports: [ZXingScannerModule],
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.css'
})
export class QrScanComponent {
  currentDevice: any;
  hasPermission: boolean;
  qrResult: any
  constructor() {
    this.currentDevice = null
    this.hasPermission = false
  }
  clearResult(): void {
    this.qrResult = null;
  }

  //Scans the QR code
  onCodeResult(resultString: string): void {
    if (this.checkQRJSON(resultString)) {
      this.qrResult = JSON.parse(resultString);
    }
  }

  //Permission for the app to use the device camera
  onHasPermission(has: boolean): void {
    this.hasPermission = has;
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
