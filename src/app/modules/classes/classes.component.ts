import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ygs-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

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
  classes = [
    {
      name: "Angular",
      category: "Personal training",
      studio: "The Gold gym",
      location: "bangalore",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      category: "Personal training",
      studio: "The Gold gym",
      location: "gurgoan",
      src: "../../../assets/IMG4.jpg",
      price: 100,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Cli",
      category: "Personal training",
      studio: "The Gold gym",
      location: "masoore",
      src: "../../../assets/IMG4.jpg",
      price: 110,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "NgRx",
      category: "Personal training",
      studio: "The Gold gym",
      location: "mumbai",
      src: "../../../assets/IMG4.jpg",
      price: 200,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular",
      category: "Personal training",
      studio: "The Gold gym",
      location: "bangalore",
      src: "../../../assets/IMG4.jpg",
      price: 500,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      category: "Personal training",
      studio: "The Gold gym",
      location: "gurgoan",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Cli",
      category: "Personal Training",
      studio: "The Gold Gym",
      location: "masoore",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "NgRx",
      category: "Fitness",
      studio: "The Smart gym",
      location: "asfd adf a",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular",
      category: "other",
      studio: "Orange",
      location: "bangalore",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Material asfd ajsdfh jkashf jahsfkj ahsjfk ",
      category: "fitness",
      studio: "The Fitness",
      location: "gurgoan",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "Angular Cli",
      category: "other",
      studio: "Yoga",
      location: "masoore",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
    },
    {
      name: "NgRx",
      category: "Personal traning",
      studio: "Orange",
      location: "mumbai",
      src: "../../../assets/IMG4.jpg",
      price: 210,
      time: '6:00am - 7:00am',
      trainer: 'virender'
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
