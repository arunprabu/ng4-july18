import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //rective forms should be imported if you use reactive forms
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LoginModalComponent } from './components/shared/header/login-modal.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ContactService } from './services/contact.service';
import { AuthGuard } from './auth.guard';
import { EllipsisPipe } from './ellipsis.pipe';

// consts
const APP_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailComponent },
  { path: 'add', component: AddContactComponent, canActivate: [ AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginModalComponent,
    AddContactComponent,
    ContactsComponent,
    ContactDetailComponent,
    HomeComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    DataTablesModule
  ],
  providers: [ContactService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
