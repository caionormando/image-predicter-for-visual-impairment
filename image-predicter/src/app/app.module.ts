import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureCaptureModule } from './features/picture-capture/picture-capture.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PictureCaptureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
