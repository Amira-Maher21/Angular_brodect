import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-orderermaster',
  templateUrl: './orderermaster.component.html',
  styleUrls: ['./orderermaster.component.scss']
})
export class OrderermasterComponent implements OnInit,AfterViewInit {
  catlist:Icategory[];
  selectedcatID:number=0;
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef;
  @ViewChild('productListComponent') prdListcompobj!:ProductListComponent;

  receceivedOrderTotalPrice:number=0;

constructor()
{
  this.catlist=[
    {id:1,name:'laptobs'},
    {id:2,name:'taplets'},
    {id:3,name:'Mobiles'},
  ];
}
  ngAfterViewInit(): void {
this.clientNameInpElem.nativeElement.value= "Yare Name Here";
this.clientNameInpElem.nativeElement.style.border="2px solid red";
// console.log(this.prdListcompobj.ProdList);
}
ontotalpricechanged(Totalpric:number)
{
  this.receceivedOrderTotalPrice=Totalpric;
}
  ngOnInit(): void {
  }
}
