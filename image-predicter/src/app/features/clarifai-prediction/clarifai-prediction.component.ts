import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PictureCaptureService } from '../picture-capture/services/picture-capture.service';
import * as Clarifai from 'clarifai';
import { ClarifaiCommunicationServices } from './services/clarifai.communication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/shared/alert/services/alert.service';
@Component({
  selector: 'app-clarifai-prediction',
  templateUrl: './clarifai-prediction.component.html',
  styleUrls: ['./clarifai-prediction.component.scss'],
})
export class ClarifaiPredictionComponent implements OnInit {
  predictionList: any;
  showAlert: boolean;
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
    this.spinner.show();
    this.showAlert = true;
    this.photoCaptureService.photoUploading$
      .pipe(
        tap(() => {
          setTimeout(() => {
            this.spinner.hide();
          }, 500);
        })
      )
      .pipe(
        tap(() => {
          setTimeout(() => {
            this.showAlert = false;
          }, 3000);
        })
      )
      .subscribe((photoUploaded) => {
        this.predictPicture(photoUploaded);
      });
  }

  predictPicture(pictureUrl: any) {
    pictureUrl = pictureUrl.toString().replace(/^data:image\/(.*);base64,/, '');
    this.clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, pictureUrl).then(
      (response) => {
        this.predictionList = response.outputs[0].data.concepts;
        this.clarifaiCommunicationService.emmitPrediction(this.predictionList);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
