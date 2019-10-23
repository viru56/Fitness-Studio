import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material";
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'ygs-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit {

  newUserForm: FormGroup;
  logo = '../../../assets/logo.png';
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      fullName:["",Validators.required],
      password: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    this.dialogRef.close(true);
  }
}
