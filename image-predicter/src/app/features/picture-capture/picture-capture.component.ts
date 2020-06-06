import { Component } from '@angular/core';
import { PictureCaptureService } from './services/picture-capture.service';

@Component({
  selector: 'app-picture-capture',
  templateUrl: './picture-capture.component.html',
  styleUrls: ['./picture-capture.component.scss'],
})
export class PictureCaptureComponent {
  selectedFile: File;

  constructor(private photoCaptureService: PictureCaptureService) {}
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.photoCaptureService.emmitPhotoUploading(this.selectedFile);
  }
}
