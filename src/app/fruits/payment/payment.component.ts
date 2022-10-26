import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  

}
