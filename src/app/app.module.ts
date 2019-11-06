import { MockModule } from './mock/mock.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
