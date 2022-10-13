import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Card } from './card/card';
import { Main } from './main/main';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Main, Card],
  bootstrap: [Main],
})
export class AppModule {}
