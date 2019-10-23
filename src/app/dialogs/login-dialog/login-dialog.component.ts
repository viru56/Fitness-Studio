import { Component, OnInit } from '@angular/core';
import { ForgotPasswordDialogComponent } from '../forgot-password-dialog/forgot-password-dialog.component';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";

@Component({
  selector: 'ygs-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  logo = '../../../assets/logo.png';
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      password: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.dialogRef.close(true);
  }
  
  forgotPassword(): void {
    this.dialogRef.close(false);
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}
