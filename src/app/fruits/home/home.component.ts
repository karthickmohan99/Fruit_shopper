import { Component, OnInit, TemplateRef } from '@angular/core';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';
import { CartService } from 'src/app/service/cart.service';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FiredataService } from 'src/app/service/firedata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  color:string='Azure'
  allFruits: any = [];
  deleteModal: any;
  valueTodelete: any;
  filterTerm: string = '';
  showTable: boolean = false;
  payload: { id: number; Name: string; Quantity: number; Price: number; irl: string | number; };


  constructor(private fruitService: FruitsService,private cartService:CartService, public modalservice:BsModalService, public modalRef: BsModalRef,private router: Router,private fireservice :FiredataService) {}

  ngOnInit(): void {





    this.get();
    console.log(this.allFruits,'fruitss')
    //localStorage.removeItem('SeesionUser')
if(this.allFruits == 0){

    this.showTable= true
}
 else{
  this.showTable =false
}

this.fireservice.getData()

  }


  get() {

    this.fireservice.getData().subscribe((res)=>{
      this.allFruits=res.map((items: any) => {
        const data = items.payload.doc.data();
       // data.id = items.payload.doc.id;

        return data;

      });;
      console.log(this.allFruits,"fruitss")


    })


  }

  openDeleteModal(values: any) {
    this.valueTodelete = values;
    this.deleteModal.show();
  }

  delete() {
    this.fruitService.deleteData(this.valueTodelete).subscribe((res) => {
      console.log(res, 'delete res');
      this.deleteModal.hide();
      //this.get();
    });
  }

  // addToCart(product:Fruits){
  //   console.log(product,"productsss")
  //     this.fruitService.addToCart(product)
  // }


  productDetail(){
   this.router.navigate(["/cart"])
  }
  addToCart(product: Fruits) {

           this.cartService.addToCart(product)


  };







  discardAll(){

    this.modalservice.hide();
  }

  itemCount(){
    return this.cartService.itemsCount();
  }

}
