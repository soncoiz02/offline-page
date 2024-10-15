import { Routes } from '@angular/router';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { ShareContentComponent } from './share-content/share-content.component';
import { CropImageComponent } from './crop-image/crop-image.component';

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
        path: 'crop-image',
        component: CropImageComponent
    }
];
