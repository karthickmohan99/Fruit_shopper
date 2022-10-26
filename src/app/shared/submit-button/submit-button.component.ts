
import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {

  @Input() label: any;

   @Input() className:any;
   @Input() type:any;
   @Output() onClick =new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  onClickbutton(event:MouseEvent){
       this.onClick.emit(event)
  }

}


