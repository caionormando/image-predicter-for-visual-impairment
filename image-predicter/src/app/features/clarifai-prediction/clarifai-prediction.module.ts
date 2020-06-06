import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarifaiPredictionComponent } from './clarifai-prediction.component';
import { PredictionListComponent } from './prediction-list/prediction-list.component';

@NgModule({
  declarations: [ClarifaiPredictionComponent, PredictionListComponent],
  imports: [CommonModule],
  exports: [ClarifaiPredictionComponent],
})
export class ClarifaiPredictionModule {}
