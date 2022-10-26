import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiredataService } from 'src/app/service/firedata.service';
import { Fruits } from '../fruits';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  fruitForm:any = {

    Name:'',
    Price: 0,
    Quantity: 0,
    irl:''
  };

  constructor(private route: ActivatedRoute,
    private router:Router,
    private fruitService: FruitsService,
    private fireservice: FiredataService) { }

  ngOnInit(): void {

    this.fireservice.dbEditInfo$.subscribe((data)=>{
      this.fruitForm=data
      console.log(this.fruitForm,"editeddata")
    })
    this.route.paramMap.subscribe((param)=>{
      var id = param.get('idd');
      console.log(id,'routeid')
       //this.getById(id)
    })


  }



  update(){
    this.fireservice.updateProduct(this.fruitForm)
  }

}
