import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems:number;
  @Input() pageSize:number;
  @Output() onPageSelected:EventEmitter<number>;
  activePage:number=1;
  pages:number[];

  getPages():number{
    return Math.ceil(this.totalItems/this.pageSize);
  }

  constructor() { 
    this.onPageSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.pages = [];
      for (let i = 1; i <= this.getPages(); i++) {
        this.pages.push(i);
      }    
  }

  pageSelected(newPage:number){
    if(newPage >= 1 || newPage <= this.getPages()){
      this.activePage = newPage;
      this.onPageSelected.emit(this.activePage);
    }
  }
}
