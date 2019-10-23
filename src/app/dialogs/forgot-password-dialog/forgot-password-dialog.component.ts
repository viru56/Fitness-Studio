import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";


@Component({
  selector: 'ygs-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent implements OnInit {
  resetPasswordForm: FormGroup;
  logo = '../../../assets/logo.png';
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    console.log(this.resetPasswordForm.value);
    this.dialogRef.close(true);
  }
}
