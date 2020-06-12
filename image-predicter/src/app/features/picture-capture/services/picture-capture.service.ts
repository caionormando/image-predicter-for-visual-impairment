import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Injectable({ providedIn: 'root' })
export class PictureCaptureService {
  private photoUploading = new ReplaySubject<any>(1);

  photoUploading$ = this.photoUploading.asObservable();

  emmitPhotoUploading(photoUrl: string) {
    this.photoUploading.next(photoUrl);
  }
}
