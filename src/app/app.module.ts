import { HalloweenModule } from './halloween/halloween.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HalloweenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
