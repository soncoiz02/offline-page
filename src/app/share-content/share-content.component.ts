import { Component } from '@angular/core';

@Component({
  selector: 'app-share-content',
  standalone: true,
  imports: [],
  templateUrl: './share-content.component.html',
  styleUrl: './share-content.component.css'
})
export class ShareContentComponent {
  handleShareContent(e: MouseEvent) {
    if (!!navigator.share) {
      navigator.share({
        title: 'Tiêu đề test',
        text: 'Nội dung chia sẻ',
        url: window.location.href,
      })
        .then(() => console.log("ok"))
        .catch((error) => console.error('Lỗi khi chia sẻ:', error));
    } else {
      alert("Trình duyệt không hỗ trợ")
    }
  }
}
