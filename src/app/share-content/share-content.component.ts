import { Component } from '@angular/core';

@Component({
  selector: 'app-share-content',
  standalone: true,
  imports: [],
  templateUrl: './share-content.component.html',
  styleUrl: './share-content.component.css'
})
export class ShareContentComponent {
  handleShareContent(e: MouseEvent, type: string) {
    if (!!navigator.share) {
      if (type === 'file') {
        const file = new File(['Hello!'], 'test.txt', {
          type: 'text/plain'
        })
        navigator.share({
          title: 'Tiêu đề test',
          text: 'Nội dung chia sẻ',
          files: [file],
        })
          .then(() => console.log("ok"))
          .catch((error) => console.error('Lỗi khi chia sẻ:', error));
      }
      else {
        navigator.share({
          title: 'Tiêu đề test',
          text: 'Nội dung chia sẻ',
          url: "https://devecontractapp.intrustdss.xyz/api/download-file?id=B724BE54-FE99-465A-9363-7CD3B25DBE46&view=1#toolbar=0",
        })
          .then(() => console.log("ok"))
          .catch((error) => console.error('Lỗi khi chia sẻ:', error));
      }
    } else {
      alert("Trình duyệt không hỗ trợ")
    }
  }
}
