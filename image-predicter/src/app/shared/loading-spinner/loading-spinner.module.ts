import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, NgxSpinnerModule],
  exports: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule {}
