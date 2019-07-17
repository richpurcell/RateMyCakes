import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

// We need to include the FormsModule library within our App Module file.
import { FormsModule } from '@angular/forms';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
