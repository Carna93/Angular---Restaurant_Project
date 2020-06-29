import { Restaurants } from './../../../model/restaurants';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from 'src/app/modal/modal.component';



@Component({
  selector: 'app-rest-list',
  templateUrl: './rest-list.component.html',
  styleUrls: ['./rest-list.component.css']
})
export class RestListComponent implements OnInit {
  @Input() restaurants:Restaurants;
  
  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

  open(){
    const modalRef = this.modal.open(ModalComponent);
    modalRef.componentInstance.restaurants = this.restaurants;
  }

}
