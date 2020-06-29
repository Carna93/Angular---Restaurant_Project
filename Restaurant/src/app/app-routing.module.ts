import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './side-bar/about/about.component';
import { RestaurantsComponent } from './side-bar/restaurants/restaurants.component';
import { HomeComponent } from './side-bar/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants/:cuisine', component: RestaurantsComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
