import { Routes } from '@angular/router';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { ShareContentComponent } from './share-content/share-content.component';

export const routes: Routes = [
    {
        path: 'qr-scanner',
        component: QrScanComponent
    },
    {
        path: 'share-content',
        component: ShareContentComponent
    }
];
