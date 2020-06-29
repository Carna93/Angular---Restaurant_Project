import { Restaurants } from './restaurants';
export class RestaurantsList{
    count:number;
    results: Restaurants[];
    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(data=>{
            return new Restaurants(data);
        }) || [];
    }
}