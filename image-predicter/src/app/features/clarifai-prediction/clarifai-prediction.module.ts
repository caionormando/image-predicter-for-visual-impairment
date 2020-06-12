import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarifaiPredictionComponent } from './clarifai-prediction.component';
import { PredictionListComponent } from './prediction-list/prediction-list.component';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [ClarifaiPredictionComponent, PredictionListComponent],
  imports: [CommonModule, LoadingSpinnerModule],
  exports: [ClarifaiPredictionComponent],
})
export class ClarifaiPredictionModule {}
