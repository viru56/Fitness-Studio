import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
@Component({
  selector: 'ygs-single-studio',
  templateUrl: './single-studio.component.html',
  styleUrls: ['./single-studio.component.scss']
})

export class SingleStudioComponent implements OnInit {
  slides: { image: string }[] = [];
  activeSlideIndex = 0;
  classDate: string;
  minDate: Date;
  maxDate: Date;
  constructor(private route: ActivatedRoute) {}
  studioInfo = {
    logo: "../../assets/logo.png",
    name: "Angular",
    category: "YOGA, Fitness, Personal Training, Cardio",
    location: "9, 5th cross, 11th main,maruthi nagar, malleshpalya, bangalore, karnataka",
    phone: 8586086872,
    ratings: 3,
    review: 23,
    memberships: [
      {
        title: "1 Month",
        category: "Cardio, Gym, Fitness, YOGA, Fitness",
        description:
          "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 1000
      },
      {
        title: "3 Month",
        subtitle: "plus 1 month free",
        category: "Cardio, Gym, Fitness",
        description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 3000
      },
      {
        title: "6 Months",
        category: "Cardio, Gym, Fitness",
        description:  "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 6000,
        offeredPrice: 4500
      },
      {
        title: "1 Year",
        category: "Cardio, Gym, Fitness",
        description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 9000,
        offeredPrice: 7000
      }
    ],
    classes: [
      {
        name: "Angular",
        category: "Cardio",
        trainer: "virender",
        time: "5:00am - 6:00am",
        description:
          "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 200
      },
      {
        name: "yoga free stype",
        category: "Fitness",
        trainer: "virender nehra",
        time: "5:30am - 6:30am",
        description:
          "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 300
      },
      {
        name: "personal gym training",
        category: "Gym",
        trainer: "virender nehra",
        time: "5:00pm - 6:00pm",
        description:
          "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 400,
        offeredPrice: 350
      },
      {
        name: "yoga free style",
        category: "Yoga",
        trainer: "virender",
        time: "5:30pm - 6:30pm",
        description:
          "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originallybred for hunting.",
        actualPrice: 900,
        offeredPrice: 700
      }
    ],
    instructors: [
      {
        name: "Virender nehra",
        catogory: "Personal trainer"
      },
      {
        name: "Virender",
        catogory: "Yoga trainer",
        image: "../../../assets/1.jpg"
      },
      {
        name: "Nehra",
        catogory: "Boxing / kick Boxing"
      }
    ]
  };
  ngOnInit(): void {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.slides = [
      { image: "../../../assets/1.jpg" },
      { image: "../../../assets/2.jpg" },
      { image: "../../../assets/3.jpg" },
      { image: "../../../assets/IMG4.jpg" }
    ];
    console.log(this.route.snapshot.paramMap.get("id"));
    this.classDate = `${DAYS[this.minDate.getDay()]}, ${MONTHS[this.minDate.getMonth()]} ${this.minDate.getDate()}`;
  }
  buyMembership(membership: string): void {
    console.log(membership);
  }
  dateChange(dateValue: Date) {
    this.classDate = `${DAYS[dateValue.getDay()]}, ${MONTHS[dateValue.getMonth()]} ${dateValue.getDate()}`;
  }
  bookClass(classId:string){
    console.log(classId);
  }
}
