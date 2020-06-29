import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './side-bar/home/home.component';
import { AboutComponent } from './side-bar/about/about.component';
import { RestaurantsComponent } from './side-bar/restaurants/restaurants.component';
import { PaginationComponent } from './side-bar/restaurants/pagination/pagination.component';
import { RatingComponent } from './side-bar/restaurants/rating/rating.component';
import { ModalComponent } from './modal/modal.component';
import { RestListComponent } from './side-bar/restaurants/rest-list/rest-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    PaginationComponent,
    RatingComponent,
    ModalComponent,
    RestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
