import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SubmitButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports:[SubmitButtonComponent,
    HeaderComponent]
})
export class SharedModule { }
