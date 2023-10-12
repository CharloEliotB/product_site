import { Component } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { Cart } from '../shared/modles/Cart';
import { CartItem } from '../shared/modles/CartItem';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;

  constructor(private cartService:CartService,
              private productService:ProductService){
    this.setCart();
   }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id, quantity);
    this.setCart();
  }

}
