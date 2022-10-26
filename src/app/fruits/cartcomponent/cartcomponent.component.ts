import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Fruits } from '../fruits';

declare var window: any;
@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.scss'],
})
export class CartcomponentComponent implements OnInit {
  items: Fruits[] = this.cartService.getItems();

  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });
  // deleteModal: any;
  // valueTodelete: any;
  cartTotal :number = 0;


  constructor(private cartService: CartService, private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {


  this.totalAmount();

    // this.deleteModal = new window.bootstrap.Modal(
    //   document.getElementById('deleteModal')
    // );




   }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  // openDeleteModal(values: any) {
  //   this.valueTodelete = values;
  //   this.deleteModal.show();
  // }



  totalAmount(){
    this.cartTotal=this.items.reduce((acc,val)=>{
      return acc+(val.Price * val.Quantity)
    },0);
  }

  // totalAmountDecrease(){
  //   this.items.forEach((item) => {
  //     this.cartTotal-=item.Price;
  //   });

  // }
  delete(Product: Fruits) {
    console.log(this.items.indexOf(Product), 'iiiiii');

    this.items.splice(this.items.indexOf(Product), 1);
    this.totalAmount();
  }

  onIncrement(product: Fruits) {

    console.log(this.items);
    product.Quantity += 1;
    this.totalAmount();

  }

  onDecrement(product: Fruits) {
    console.log(this.items);
    if (product.Quantity != 1) {
      product.Quantity -= 1;
      this.totalAmount();
    }
  }

  onKey(event: any,item:Fruits) {
    console.log(this.items, 'keyyyy');
    let Quant = parseInt(event.target.value);
    item.Quantity=Quant;
    console.log(Quant, 'ke val');
    this.totalAmount();

  }
  confirmOrder(ProductData:Fruits){
    let numberid=Number(ProductData.idd)
    console.log(typeof numberid,'productiddddd')
   //this.router.navigate(['/shipping'],{queryParams:{id:ProductData.id,Name:ProductData.Name,Quantity:ProductData.Quantity,Price:ProductData.Price,irl:ProductData.irl}});
   this.router.navigate(['/shipping',(numberid)],);


  }

}

// id:number;
//   Name: string;
//   Quantity: number;
//   Price:number;
//   irl:number|string
