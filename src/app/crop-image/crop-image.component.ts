import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

declare var cv: any;  // Declare OpenCV.js globally

@Component({
  selector: 'app-crop-image',
  standalone: true,
  imports: [],
  templateUrl: './crop-image.component.html',
  styleUrl: './crop-image.component.css'
})
export class CropImageComponent implements OnInit {
  @ViewChild('video', { static: true }) video!: ElementRef;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  opencvReady: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.startCamera();
  }

  // Start the camera
  startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  // Capture the image and process it
  capture() {
    const canvasEl = this.canvas.nativeElement;
    const context = canvasEl.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0, 640, 480);

    const img = new Image();
    img.src = canvasEl.toDataURL('image/png');
  }
}
