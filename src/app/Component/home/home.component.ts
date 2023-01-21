import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  storeInfo: StoreData
  isImageshown:boolean=true;
constructor (){ 
  this.storeInfo= new StoreData('iti store','https://picsum.photos/350/300', ['cairo','alex','Qrna','ass']);
}

ngOnInit (): void
{
  
}
toggleImage ()
{
  this.isImageshown=!this.isImageshown;
}
}
