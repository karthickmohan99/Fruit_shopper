import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fruits } from './fruits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  baseUrl='http://localhost:3000/fruits'

  constructor(private http: HttpClient) { }

  addToCart(cartItem:Fruits){
      let alreadyExistsInCart:boolean =false;
      let existingCardItem = undefined;


  }

  get(){
    return this.http.get<Fruits[]>(`${this.baseUrl}`);

  }

  create(Payload:Fruits):Observable<Fruits>{
    return this.http.post<Fruits>(`${this.baseUrl}`,Payload);
  }

  getById(id:number):Observable<Fruits>{
    return this.http.get<Fruits>(`${this.baseUrl}/${id}`);
  }

  update(Payload:any){
    return this.http.put(`${this.baseUrl}/${Payload.id}`,Payload);
  }

  deleteData(values:any){
    console.log(values,"deleted data api")

  return this.http.delete<Fruits>(`${this.baseUrl}/${values.id}`);


 }



}
