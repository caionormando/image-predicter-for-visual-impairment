import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClarifaiCommunicationServices {
  private predictionSource = new ReplaySubject<any>(null);

  predictionSource$ = this.predictionSource.asObservable();

  emmitPrediction(predictions: any) {
    this.predictionSource.next(predictions);
  }
}
