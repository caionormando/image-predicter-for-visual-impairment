import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarifaiPredictionComponent } from './clarifai-prediction.component';
import { PredictionListComponent } from './prediction-list/prediction-list.component';
import { LoadingSpinnerModule } from 'src/app/shared/loading-spinner/loading-spinner.module';
import { AlertModule } from 'src/app/shared/alert/alert.module';

@NgModule({
  declarations: [ClarifaiPredictionComponent, PredictionListComponent],
  imports: [CommonModule, LoadingSpinnerModule, AlertModule],
  exports: [ClarifaiPredictionComponent],
})
export class ClarifaiPredictionModule {}
