
export class Product{
    id!:number;
    name!:string;
    price!:number;
    Tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageURL!:string;
    origin!:string[];
    cookTime!:string;

}