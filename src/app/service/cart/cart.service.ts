import { Product } from 'src/app/shared/modles/Product';
import { Cart } from './../../shared/modles/Cart';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/modles/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart:Cart = new Cart();
  
  addToCard(food:Product):void{
    let cartItem = this.cart.items.find(item=>item.product.id===food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item=>item.product.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item=>item.product.id ===foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity
  }

  getCart():Cart{
    return this.cart
  }
}
