import { ProductService } from './service/product/product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { ProductPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NousComponent } from './nous/nous.component';
import { ProjetsComponent } from './projets/projets.component';
import { SliderComponent } from './slider/slider.component';
import { NousAcceuilComponent } from './nous-acceuil/nous-acceuil.component';
import { PopUpComponent } from './pop-up/pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    ProductPageComponent,
    CartPageComponent,
    NotFoundComponent,
    HeroPageComponent,
    FooterComponent,
    ContactComponent,
    NousComponent,
    ProjetsComponent,
    SliderComponent,
    NousAcceuilComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //RatingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
