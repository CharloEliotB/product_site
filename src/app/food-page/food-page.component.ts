import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/modles/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadPropExpr } from '@angular/compiler';
import { ProductService } from '../service/product/product.service';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product!:Product;
  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private cartService:CartService,
              private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
        this.product = productService.getProductById(params['id']);
      })
  }

  addToCart(){
    this.cartService.addToCard(this.product);
    this.router.navigateByUrl('/cart-page');

  }



  ngOnInit(): void {
    
  }

}
