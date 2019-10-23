import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'ygs-studios',
  templateUrl: './studios.component.html',
  styleUrls: ['./studios.component.scss']
})
export class StudiosComponent implements OnInit {
  selectedFitnessType: string[];
  selectedLocation: string;
  fitnessType = [
    "Yoga",
    "Barre",
    "Pilate",
    "Cycling",
    "Circuit Training",
    "Boxing / Kickboxing",
    "Martial Arts",
    "Pole Fitness",
    "Internal Traning",
    "Weight Training",
    "Gym Classes",
    "Sports",
    "CrossFit",
    "Aerial",
    "Gymnastics",
    "Rock Climbing",
    "Tai Chi",
    "Personal Training",
    "Bootcamp",
    "Dance"
  ];
  Location = ["Bangalore", "Pune", "Gurugram", "Mumbai"];
  studios = [
    {
      name: "Angular",
      location: "bangalore",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      location: "gurgoan",
      retings: 1,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Cli",
      location: "masoore",
      retings: 3,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "NgRx",
      location: "asfd adf a",
      retings: 5,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular",
      location: "bangalore",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      location: "gurgoan",
      retings: 1,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Cli",
      location: "masoore",
      retings: 3,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "NgRx",
      location: "asfd adf a",
      retings: 5,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular",
      location: "bangalore",
      retings: 4,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      location: "gurgoan",
      retings: 1,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "Angular Cli",
      location: "masoore",
      retings: 3,
      src: "../../../assets/IMG4.jpg"
    },
    {
      name: "NgRx",
      location: "asfd adf a",
      retings: 5,
      src: "../../../assets/IMG4.jpg"
    }
  ];
  constructor() {}

  ngOnInit(): void {
    this.selectedFitnessType = [];
    this.selectedLocation = "";
  }
  fitnessTypeChange(): void {
    console.log(this.selectedFitnessType);
  }
  locationChange(): void {
    console.log(this.selectedLocation);
  }

  search(fitlerText) {
    console.log(fitlerText);
  }
}
