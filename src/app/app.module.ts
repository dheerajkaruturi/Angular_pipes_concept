import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Shortenpipe } from "./shorten.pipe";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [AppComponent, Shortenpipe, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
