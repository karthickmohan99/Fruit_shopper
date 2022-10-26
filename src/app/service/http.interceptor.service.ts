import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable,tap} from 'rxjs';
//import {tap} from 'rxjs/Operators';


@Injectable()
export class httpHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log(req.url)
      const newReq =req.clone({
        // url:"http://localhost:3000/"+req.url,
        headers:req.headers.set('Authorization','karthick test')
    })
      console.log('interceptorrrrrrr',req)
    return next.handle(newReq)
    .pipe(
      tap((result:any)=>{
        console.log('sucess response',result)
      },
      (err:any)=>{
        console.log('errrrr',err)
      })
    )

  }
}

