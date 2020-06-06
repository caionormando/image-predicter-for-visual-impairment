import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClarifaiCommunicationServices } from '../services/clarifai.communication.service';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.scss'],
})
export class PredictionListComponent {
  subscription: Subscription;
  predictionData: any;

  constructor(
    private clarifaiCommunicationServices: ClarifaiCommunicationServices,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.subscription = this.clarifaiCommunicationServices.predictionSource$.subscribe(
      (predictions) => {
        console.log(predictions);
        this.predictionData = predictions;
        this.changeDetectorRef.detectChanges();
      }
    );
  }
}
