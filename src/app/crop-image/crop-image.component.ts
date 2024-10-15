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
    this.waitForOpenCV();
  }

  // Check if OpenCV.js is loaded
  waitForOpenCV() {
    if (typeof cv !== 'undefined') {
      this.opencvReady = true;
      this.startCamera();
    } else {
      setTimeout(() => this.waitForOpenCV(), 100);
    }
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
    if (!this.opencvReady) {
      console.log('OpenCV.js is not loaded yet.');
      return;
    }

    const canvasEl = this.canvas.nativeElement;
    const context = canvasEl.getContext('2d');
    context.drawImage(this.video.nativeElement, 0, 0, 640, 480);

    const img = new Image();
    img.src = canvasEl.toDataURL('image/png');
    img.onload = () => {
      this.processImage(img);
    };
  }

  // Process the captured image and add a border using OpenCV.js
  processImage(img: HTMLImageElement) {
    const src = cv.imread(img);

    // Optional: Convert to grayscale
    const gray = new cv.Mat();
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

    // Add a green border around the processed image
    const borderSize = 10;
    const borderColor = new cv.Scalar(0, 255, 0, 255);  // Green border in RGBA
    const borderedImg = new cv.Mat();
    cv.copyMakeBorder(src, borderedImg, borderSize, borderSize, borderSize, borderSize, cv.BORDER_CONSTANT, borderColor);

    // Display the result with a border on the canvas
    cv.imshow(this.canvas.nativeElement, borderedImg);

    // Clean up
    src.delete();
    gray.delete();
    borderedImg.delete();
  }
}
