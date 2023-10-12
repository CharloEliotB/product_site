import { ProductPageComponent } from './food-page/food-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { ContactComponent } from './contact/contact.component';
import { NousComponent } from './nous/nous.component';


const routes: Routes = [
  {path:'', component:HeroPageComponent},
  {path:'home', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:ProductPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'contact', component:ContactComponent},
  {path:'nous', component:NousComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
