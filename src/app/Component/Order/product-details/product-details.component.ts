import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  currprdID:number=0;
  prd:Iproduct={} as Iproduct;
  constructor(private activatedroute:ActivatedRoute
    ,          private prdservice:StaticProductsService){

  }
  ngOnInit(): void {
    this.currprdID=Number (this.activatedroute.snapshot.paramMap.get('pid'))
    console.log(this.currprdID)
  }
ngonInit(): void {

}
}
