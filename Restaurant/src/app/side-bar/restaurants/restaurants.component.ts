import { Component, OnInit } from '@angular/core';
import { RestaurantsList } from 'src/app/model/restaurants-server';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  Restaurants:RestaurantsList;
  parameters = {
    page:1,
    pageSize:12,
    filter:{
      priceFrom:1,
      priceTo:5,
      cuisine:''
    },
  }
  constructor(private service:RestaurantService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      let cuisine = data['cuisine'] == 'all' ? '' : data['cuisine'];
      this.parameters.filter.cuisine = cuisine;
      this.parameters.page = 1;
      this.updateAll();
    });   
  }

  updateAll(){
    this.service.getAll(this.parameters).subscribe(data=>{
      this.Restaurants = data;
    });
  }

  changePage(newPage:number){
    this.parameters.page = newPage;
    this.updateAll();
  }

}
