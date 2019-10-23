import { NgModule } from "@angular/core";
import { SingleClassComponent } from "./single-class.component";
import { SharedModule } from "@app/shared";
import { Routes, RouterModule } from "@angular/router";

const classRoute: Routes = [
  {
    path: "",
    component: SingleClassComponent
  }
];

@NgModule({
  declarations: [SingleClassComponent],
  imports: [SharedModule, RouterModule.forChild(classRoute)]
})
export class SingleClassModule {}
