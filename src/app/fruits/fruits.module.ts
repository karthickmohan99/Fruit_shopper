import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FruitsRoutingModule } from './fruits-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitButtonComponent } from '../shared/submit-button/submit-button.component';
import { HeaderComponent } from '../shared/header/header.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { ShippingComponent } from './shipping/shipping.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentComponent } from './payment/payment.component'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AdminComponent } from './admin/admin.component';
import { ModalModule } from 'ngx-bootstrap/modal';








@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    RegisterComponent,
    LoginComponent,
    CartcomponentComponent,
     ShippingComponent,
     PaymentComponent,
     AdminComponent,




  ],
  entryComponents: [
    CreateComponent
  ],
  imports: [
   BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule,
    MatRippleModule,
    FruitsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    SharedModule,
    MatToolbarModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot()




  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FruitsModule { }
