import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCaptureComponent } from './picture-capture.component';
import { ClarifaiPredictionModule } from '../clarifai-prediction/clarifai-prediction.module';



@NgModule({
  declarations: [PictureCaptureComponent],
  imports: [
    CommonModule,
    ClarifaiPredictionModule
  ],
  exports: [PictureCaptureComponent]
})
export class PictureCaptureModule { }
