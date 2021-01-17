import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardDetailsComponent } from "./cards/card-details/card-details.component";

const routes: Routes = [
  {
    path: ":id",
    component: CardDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
