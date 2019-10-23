import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ygs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  studios = [
    {
      name: "Angular",
      location: "bangalore",
      retings: 4,
      src: "../../../assets/download15.jpg"
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      location: "gurgoan",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Cli",
      location: "masoore",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "NgRx",
      location: "asfd adf a",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    }
  ];
  cities=[
    {
      src:"../../../assets/mumbai.jpeg",
      name: 'Bangalore'
    },
    {
      src:"../../../assets/mumbai.jpeg",
      name:'Pune'
    },
    {
      src:"../../../assets/mumbai.jpeg",
      name:'Mumbai'
    },
    {
      src:"../../../assets/mumbai.jpeg",
      name:'Gurugram'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
