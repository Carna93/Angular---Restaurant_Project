import { Component, OnInit, Input } from '@angular/core';
import { Restaurants } from '../model/restaurants';
import { Menu } from '../model/menu';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  menu:Menu;
  @Input() restaurants:Restaurants;

  constructor(private service:RestaurantService) { }

  ngOnInit(): void {
    this.service.getMenu(this.restaurants._id).subscribe(data=>{
      this.menu = data.results[0];
    });
  }

}
