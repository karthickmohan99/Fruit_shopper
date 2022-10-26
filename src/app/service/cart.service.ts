import { Injectable } from '@angular/core';
import { Fruits } from '../fruits/fruits';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Fruits[] = [];
  BaseUrl='http://localhost:3000/items'

  constructor(private http: HttpClient,private afs : AngularFirestore) { }

  addToCart(product:Fruits){
    console.log(this.items,"caertItems")

    let productExists = false
      for(let i in this.items){

      if(this.items[i].idd === product.idd){

        this.items[i].Quantity++
        productExists=true;


      }


    }

    if(!productExists){

       this.items.push({
          idd:product.idd,
          Name: product.Name,
          Quantity:product.Quantity,
          Price:product.Price,
          irl:product.irl})
    }


  }
  deleteToCart(product:Fruits) {
    this.items.pop();
  }

  getItems(){
    return this.items;


  }

  // this.allFruits=res.map((items: any) => {
  //   const data = items.payload.doc.data();
  //   data.id = items.payload.doc.id;

  //   return data;

  // });;

  // addToCart(product:Fruits):Observable<any>{
  //   return this.http.post<Fruits[]>(`${this.BaseUrl}`,product);
  // }


  itemsCount(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
