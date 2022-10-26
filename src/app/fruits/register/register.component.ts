import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Validation } from '../validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  submitted: boolean = false;
  localdata: any;

  constructor(private fb:FormBuilder,private router: Router, private toast:ToastrService ) { }

  ngOnInit(): void {
     this.registerForm = this.fb.group({
            firstName: ['', [Validators.required,Validators.minLength(6)]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(10)]],
            cmPassword: ['', Validators.required],
        },
        { validators: [Validation.match('password', 'cmPassword')]}
 ) }
  onSubmit(){
    console.log( typeof this.registerForm , "register")
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    if(this.registerForm.valid){
       console.log(JSON.stringify(this.registerForm.value,null,2), "registerrrrr")
       this.localdata = localStorage.getItem('form-data');
       console.log(this.localdata,'loc')
       if(this.localdata){
        let local = JSON.parse(this.localdata);
        local.push(this.registerForm.value)
        localStorage.setItem('form-data',JSON.stringify(local))
       }else{
         localStorage.setItem('form-data',JSON.stringify([this.registerForm.value]))
       }

       this.toast.success('Successfully Registered!');

      this.router.navigate(['/fruits/login'])
    }

   }


  resetCall(event:MouseEvent){
    console.log('function',event)
    this.submitted=false;
    this.registerForm.reset()
  }
  get f():{[key:string]:AbstractControl} { return this.registerForm.controls; }

}

