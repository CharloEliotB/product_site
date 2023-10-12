import { Injectable } from '@angular/core';
import {Product} from '../../shared/modles/Product';
import {Tag} from '../../shared/modles/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id:number):Product{
    return this.getAll().find(product => product.id == id )!;
  }

  getAllProductBySearchTerm(searchTerm:string) : Product[] {
     return this.getAll().filter(product =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    
  }

  getAllTags(): Tag[] {
    return[
      {name:'All', count :6},
      {name:'Fastfood', count :3},
      {name:'Pizza', count :4},
      {name:'Lunch', count :6},
      {name:'Boobs', count :1},
      {name:'Bob', count :1}
  
    ]
  }

  getAllProductByTag(tag:string): Product[] {
    if(tag == "All")
      return this.getAll();
    else 
      return this.getAll().filter(product => product.Tags?.includes(tag))
  }
  
  
  getAll():Product[]{
    return[
      {
        id : 1,
        name : 'alloss',
        price : 10,
        Tags : [ 'Pizza', 'Lunch', 'Boobs'], 
        favorite : true,
        stars: 0,
        imageURL: '/assets/images/foods/food-1.jpg',
        origin:['italy'],
        cookTime:'10-20'
      },
      {
        id : 2,
        name : 'Hamburger',
        price : 10,
        Tags : ['Fastfood', 'Lunch','Bob'], 
        favorite : false,
        stars: 0,
        imageURL: '/assets/images/foods/food-2.jpg',
        origin:['italy', 'brasil'],
        cookTime:'10-20'
      },
      {
        id : 3,
        name : 'allo',
        price : 10,
        Tags : ['Pizza', 'Lunch'], 
        favorite : false,
        stars: 0,
        imageURL: '/assets/images/foods/food-3.jpg',
        origin:['italy'],
        cookTime:'10-20'
      },
      {
        id : 4,
        name : 'allo',
        price : 10,
        Tags : ['Fastfood', 'Lunch'], 
        favorite : false,
        stars: 0,
        imageURL: '/assets/images/foods/food-4.jpg',
        origin:['italy'],
        cookTime:'10-25'
      },
      {
        id : 4,
        name : 'allo',
        price : 10,
        Tags : ['Fastfood', 'Pizza', 'Lunch'], 
        favorite : false,
        stars: 0,
        imageURL: '/assets/images/foods/food-4.jpg',
        origin:['italy'],
        cookTime:'10-25'
      },
      {
        id : 4,
        name : 'allo',
        price : 10,
        Tags : ['Pizza', 'Lunch'], 
        favorite : false,
        stars: 0,
        imageURL: '/assets/images/foods/food-4.jpg',
        origin:['italy'],
        cookTime:'10-25'
      }
    ]
  }
}
