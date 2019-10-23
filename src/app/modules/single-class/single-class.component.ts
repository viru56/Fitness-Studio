import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ygs-single-class',
  templateUrl: './single-class.component.html',
  styleUrls: ['./single-class.component.scss']
})
export class SingleClassComponent implements OnInit {

  slides: { image: string }[] = [];
  activeSlideIndex = 0;
  selectedClassDate:Date;
  selectedClassTime:string;
  constructor(private route: ActivatedRoute) { }
  classInfo = {
    logo :"../../assets/logo.png",
    name: "angular",
    category: 'YOGA',
    studioName:'Angular studio yoga',
    location: '9, 5th cross, 11th main,maruthi nagar, malleshpalya, bangalore, karnataka',
    phone: 8123465672,
    ratings: 3,
    review: 23,
    price: 210,
    time: '6am - 7am'
  }
  ngOnInit():void {
    this.slides = [{image: "../../../assets/1.jpg"},
    {image: "../../../assets/2.jpg"},
    {image: "../../../assets/3.jpg"},
    {image: "../../../assets/IMG4.jpg"}]
    console.log(this.route.snapshot.paramMap.get('id'));
  }
  classDateChange(): void{

  }
  classTimeChange(): void{

  }
  bookClass():void{
    console.log('class booked')
  }

}
