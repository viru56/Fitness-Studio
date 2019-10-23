import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
  declarations: [LoginDialogComponent, RegisterDialogComponent, ForgotPasswordDialogComponent],
  imports: [
    SharedModule
  ],
  entryComponents: [LoginDialogComponent, ForgotPasswordDialogComponent,RegisterDialogComponent]
})
export class DialogsModule { }
