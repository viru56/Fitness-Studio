import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    data: { title: "studio and classes near you" },
    loadChildren: () => import("../home/home.module").then(m => m.HomeModule)
  },
  {
    path: "studios",
    data: { title: "studios list" },
    loadChildren: () =>
      import("../studios/studios.module").then(m => m.StudiosModule)
  },
  {
    path: "classes",
    data: { title: "class list" },
    loadChildren: () =>
      import("../classes/classes.module").then(m => m.ClassesModule)
  },
  {
    path: "studio/:id",
    data: { title: "studio" },
    loadChildren: () =>
      import("../single-studio/single-studio.module").then(
        m => m.SingleStudioModule
      )
  },
  {
    path: "class/:id",
    data: { title: "class" },
    loadChildren: () =>
      import("../single-class/single-class.module").then(
        m => m.SingleClassModule
      )
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })]
})
export class LazyLoadModule {}
