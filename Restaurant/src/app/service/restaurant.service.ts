import { MenuList } from './../model/menu-server';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { RestaurantsList } from '../model/restaurants-server';




const url = "http://localhost:3000/api/restaurants";
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getAll(params?:any):Observable<RestaurantsList>{
    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams().set("page", params.page || '')
        .set("pageSize",params.pageSize || '')
        .set("filter",params.filter && JSON.stringify(params.filter) || '')
      }
    }
    return this.http.get(url,queryParams).pipe(map(data=>{
      return new RestaurantsList(data);
    }));
  }

  getMenu(id:number):Observable<MenuList>{
    return this.http.get<RestaurantsList>(url+"/"+id+"/menus").pipe(map(data=>{
      return new MenuList(data);
    }));
  }

}
