import { NgModule } from '@angular/core';

import { SingleStudioComponent } from './single-studio.component';
import { SharedModule } from '@app/shared';
import { RouterModule, Routes } from '@angular/router';

const studioRoutes:Routes =[{
  path:"",
  component: SingleStudioComponent
}]

@NgModule({
  declarations: [SingleStudioComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(studioRoutes)
  ]
})
export class SingleStudioModule { }
