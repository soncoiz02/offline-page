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
    console.log(resultString);

  }

  //Permission for the app to use the device camera
  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }
}
