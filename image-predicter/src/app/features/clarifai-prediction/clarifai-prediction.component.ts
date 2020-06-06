import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { PictureCaptureService } from '../picture-capture/services/picture-capture.service';
import * as Clarifai from 'clarifai';
import { ClarifaiCommunicationServices } from './services/clarifai.communication.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-clarifai-prediction',
  templateUrl: './clarifai-prediction.component.html',
  styleUrls: ['./clarifai-prediction.component.scss'],
})
export class ClarifaiPredictionComponent implements OnInit {
  @Input() picture: File;
  predictionList: any;
  subscription: Subscription;
  clarifaiApp = new Clarifai.App({
    apiKey: 'e5d4d4c1c16045ef9b162f53c41ceda6',
  });

  constructor(
    private photoCaptureService: PictureCaptureService,
    private clarifaiCommunicationService: ClarifaiCommunicationServices,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.photoCaptureService.photoUploading$.subscribe((photoUploaded) => {
      this.spinner.show();
      this.predictPicture(photoUploaded);
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    });
  }

  predictPicture(picture: any) {
    const reader = new FileReader();
    reader.onload = (item) => {
      let predictionData = item.target.result;
      predictionData = predictionData
        .toString()
        .replace(/^data:image\/(.*);base64,/, '');
      this.clarifaiApp.models
        .predict(Clarifai.GENERAL_MODEL, predictionData)
        .then(
          (response) => {
            this.predictionList = response.outputs[0].data.concepts;
            this.clarifaiCommunicationService.emmitPrediction(
              this.predictionList
            );
          },
          (err) => {
            console.error(err);
          }
        );
    };
    reader.readAsDataURL(picture);
  }
}
