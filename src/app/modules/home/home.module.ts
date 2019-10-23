import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import {HomeComponent} from './home.component';
import { Routes, RouterModule } from '@angular/router';
const homeRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ]
})
export class HomeModule { }
