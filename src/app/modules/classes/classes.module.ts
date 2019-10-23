import { NgModule } from '@angular/core';
import { ClassesComponent } from './classes.component';
import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '@app/shared';

const classesRoutes:Routes = [
  {
    path:'',
    component:ClassesComponent
  }
]

@NgModule({
  declarations: [ClassesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(classesRoutes)
  ]
})
export class ClassesModule { }
