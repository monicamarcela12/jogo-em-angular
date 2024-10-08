import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo/jogo-da-velha.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JogoDaVelhaModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
