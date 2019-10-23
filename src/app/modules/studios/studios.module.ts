import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { StudiosComponent } from "./studios.component";
import { RouterModule, Routes } from "@angular/router";

const studioRoute: Routes = [
  {
    path: "",
    component: StudiosComponent
  }
];

@NgModule({
  declarations: [StudiosComponent],
  imports: [SharedModule, RouterModule.forChild(studioRoute)]
})
export class StudiosModule {}
