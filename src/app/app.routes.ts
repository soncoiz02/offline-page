import { Routes } from '@angular/router';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { ShareContentComponent } from './share-content/share-content.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { AppComponent } from './app.component';
import { MobileIframeComponent } from './mobile-iframe/mobile-iframe.component';

export const routes: Routes = [
    {
        path: 'qr-scanner',
        component: QrScanComponent
    },
    {
        path: 'share-content',
        component: ShareContentComponent
    },
    {
        path: '',
        component: MobileIframeComponent
    }
];
