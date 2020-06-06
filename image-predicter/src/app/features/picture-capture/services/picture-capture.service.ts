import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PictureCaptureService {
  private photoUploading = new Subject<File>();

  photoUploading$ = this.photoUploading.asObservable();

  emmitPhotoUploading(photo: File) {
    this.photoUploading.next(photo);
  }
}
