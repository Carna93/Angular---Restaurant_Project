import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() fullIcon:string;
  @Input() emptyIcon:string;
  @Input() grade:number;
  fullArray;
  emptyArray;
  constructor() { }

  ngOnInit(): void {
    this.emptyArray = new Array(5-this.grade);
    this.fullArray = new Array(this.grade);
  }

}
