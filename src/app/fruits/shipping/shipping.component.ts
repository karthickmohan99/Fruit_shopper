import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { Fruits } from '../fruits';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  access: any;


  productid: string | null;
  cartProduct: any;
  itemss: Fruits[]

  // this.cartServices.getItems();

  constructor(public activatedRoute: ActivatedRoute,private router: Router,private cartServices: CartService, ) {
   }

  ngOnInit(): void {

      console.log(this.itemss,'arrayitems')
    this.productid=this.activatedRoute.snapshot.paramMap.get('id');
   let  numId=Number(this.productid)
   console.log(typeof this.productid,'iddd')


   this.cartProduct=this.itemss.find(x=>{
    x.idd === numId}),

   console.log(this.cartProduct,'product')
}




paymentPage(){
     this.router.navigate(['/payment'])
}
}
