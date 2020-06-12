import { Component, OnInit } from '@angular/core';
import { PictureCaptureService } from './services/picture-capture.service';
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';

@Component({
  selector: 'app-picture-capture',
  templateUrl: './picture-capture.component.html',
  styleUrls: ['./picture-capture.component.scss'],
})
export class PictureCaptureComponent implements OnInit {
  selectedFile: File;
  multipleCamsAvailable = false;
  webcamImage: WebcamImage = null;
  pictureCaptureTrigger = new Subject<any>();
  imageUrl: string;

  constructor(private photoCaptureService: PictureCaptureService) {}

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs().then(
      (mediaDevices: MediaDeviceInfo[]) => {
        this.multipleCamsAvailable = mediaDevices && mediaDevices.length > 1;
      }
    );
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(photo: WebcamImage) {
    this.imageUrl = photo.imageAsDataUrl;
    this.photoCaptureService.emmitPhotoUploading(this.imageUrl);
  }

  triggerPictureSnapshot() {
    this.pictureCaptureTrigger.next();
  }

  get pictureTriggerObservable(): Observable<void> {
    return this.pictureCaptureTrigger.asObservable();
  }
}
