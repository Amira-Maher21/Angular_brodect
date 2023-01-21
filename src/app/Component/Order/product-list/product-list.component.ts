import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnChanges {
  PrdListofcat:Iproduct[]=[];
  // catlist:Icategory[];
  // ProdList:Iproduct [];
  @Input() sentcatID:number=0;
  @Output()  totalpricechanged: EventEmitter<number>;
  orderTotalPrice:number=0;
  OrderDate:Date;
  constructor(private staticPrdservice: StaticProductsService
    ,private router:Router){
this.totalpricechanged=new EventEmitter<number>();
    // this.catlist=[
    //   {id:1,name:'laptobs'},
    //   {id:2,name:'taplets'},
    //   {id:3,name:'Mobiles'},
    // ];

    //     this.ProdList =[
    //   { id:100,name:'LenovoThinkpad laptobs', price:12580, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
    //   { id:200,name:'Apple MacBook  laptobs', price:20000, quantity:0,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
    //   { id:300,name:'Lenovo Tab 2 ', price:30056, quantity:10,imgURL:'https://fakeimg.pl/250x100/',categoryID:2},
    //   { id:400,name:'Samsung laptobs', price:40140, quantity:2,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
    //   { id:500,name:'Samsung Note 10', price:501000, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:3},
    //   { id:600,name:'Samsung s22 Utlra', price:6002, quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:3}

    // ];
    // this.PrdListofcat=this.ProdList
    this.OrderDate=new Date();
  }
  ngOnChanges(): void {
    //this.filterproductsBycatID();
    this.PrdListofcat=this.staticPrdservice.getProductsByCatID(this.sentcatID);
  }
  ngOnInit(): void {
    this.PrdListofcat=this.staticPrdservice.getAllProducts();
    }
  //  private filterproductsBycatID()
  // {
    // if(this.sentcatID==0)
    // this.PrdListofcat= this.ProdList
    // else
    // this.PrdListofcat= this.ProdList.filter(prd=>prd.categoryID==this.sentcatID)
  // }

  buy(prdPrice:number,count:any){
    // let itemcount:number=count;
    this.orderTotalPrice = +count*prdPrice;
    this.totalpricechanged.emit(this.orderTotalPrice);
  }
  // changecat()
  // {
  //   this.selectedcatID=1;
  // }
  OpenprscatDetails(prdID:number){

    this.router.navigate(['/products',prdID]);
    
  }
}
