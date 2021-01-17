import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MiniCardComponent } from "./cards/mini-card/mini-card.component";
import { CardDetailsComponent } from "./cards/card-details/card-details.component";

@NgModule({
  declarations: [AppComponent, MiniCardComponent, CardDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
