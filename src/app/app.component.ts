import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { TitleService } from "./shared/services";
import { OverlayContainer } from "@angular/cdk/overlay";
import { MatDialog } from '@angular/material';
import { LoginDialogComponent, RegisterDialogComponent } from './dialogs';

@Component({
  selector: "ygs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Fitness Studio";
  theme: string;
  stickyHeader: boolean;
  logo = "../assets/logo.png";
  year = new Date().getFullYear();
  isAuthenticated = false;
  navigation = [
   // { link: "admin", label: "List your business" }
    // { link: "blog", label: "Our Blog" }
  ];
  navigationSideMenu = [...this.navigation];
  constructor(
    private router: Router,
    private titleService: TitleService,
    private overlayContainer: OverlayContainer,
    private dialog: MatDialog
  ) {
    this.stickyHeader = false;
    this.theme = "light-theme";
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }
  ngOnInit(): void {
    this.changeTitle();
  }
  login(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
  register():void{
    const dialogRef = this.dialog.open(RegisterDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }
  changeTitle() {
    this.router.events.subscribe(event => {
      if (event as ActivationEnd) {
        this.titleService.setTitle(this.router.routerState.snapshot.root);
      }
    });
  }
}
