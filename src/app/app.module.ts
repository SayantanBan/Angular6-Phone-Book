import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/header/search.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { ContactViewComponent } from './components/contacts/contact-view/contact-view.component';
import { AllContactsComponent } from './components/contacts/all-contacts/all-contacts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateContactComponent } from './components/contacts/create-contact/create-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    SearchComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    GetInTouchComponent,
    ContactViewComponent,
    AllContactsComponent,
    CreateContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
