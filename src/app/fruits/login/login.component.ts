import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthguardSeviceService } from 'src/app/authguard-sevice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  submitted: any=false;
  user: any=[];
  filterdata: any;
  users='karthick'
  registerbtn: any;

  constructor(private fb:FormBuilder,private router: Router,private toast: ToastrService ,private authService :AuthguardSeviceService) { }

  ngOnInit(): void {
   this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password :['',Validators.required],})
    //authguard purpose
    localStorage.setItem('SeesionUser',this.users)

  }
   get f():{[key:string]:AbstractControl} { return this.loginForm.controls;
   };


  onSubmit(){
    console.log(this.f ,"f")
    this.submitted = true
     this.user= JSON.parse(localStorage.getItem('form-data') || '{}');
     console.log(this.user,'usersss')
     console.log(this.loginForm.get('email')?.value,'emailrsss')

     this.filterdata=this.user.find((dta:any)=>dta.email == this.loginForm.get('email')?.value &&dta.password == this.loginForm.get('password')?.value)
     console.log( this.filterdata ,'filter data')
     if(this.filterdata){
      this.authService.userLogin(this.filterdata).subscribe(
        (res:any)=>{
          console.log(res,"login res")
          if(res){
            this.toast.success('Successfully loged');
            this.router.navigate(['/fruits/home'])
          }else{
            this.toast.error(' Invalid user !')

          }
        },(err:any)=>{
          this.toast.error(' error response!')
        }
      );
    }
    else{
      //this.toast.error('Ivalid user!')
      this.registerbtn = true;
    }



  }


}

