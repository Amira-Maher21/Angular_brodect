import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private ProdList:Iproduct[];
  constructor() {
    this.ProdList =[
      { id:100,name:'LenovoThinkpad laptobs', price:12580, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
      { id:200,name:'Apple MacBook  laptobs', price:20000, quantity:0,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
      { id:300,name:'Lenovo Tab 2 ', price:30056, quantity:10,imgURL:'https://fakeimg.pl/250x100/',categoryID:2},
      { id:400,name:'Samsung laptobs', price:40140, quantity:2,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
      { id:500,name:'Samsung Note 10', price:501000, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:3},
      { id:600,name:'Samsung s22 Utlra', price:6002, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:3}

    ];
  }
  getAllProducts() :Iproduct[]
  {
    return this.ProdList;
  }
  getProductsByCatID(cID:number): Iproduct[]
  {
    if(cID==0)
    return this.ProdList
    else
     return this.ProdList.filter(prd=>prd.categoryID== cID);
  }
  getProductBy(PID:number) :Iproduct|null
  {
    let foundprodect=this.ProdList.find(prd=>prd.id==PID)
    return foundprodect? foundprodect: null;
  }
  
}
