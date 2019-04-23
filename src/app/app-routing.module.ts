import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { AboutComponent } from './components/about/about.component';
import { ContactViewComponent } from './components/contacts/contact-view/contact-view.component';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'concepts',
    component: ConceptsComponent,
  }, {
    path: 'contacts',
    children: [
      {
        path: '',
        component: ContactsComponent,
      },
      {
        path: ':id',
        component: ContactViewComponent,
      }
    ]
  }, 
  {
    path: 'get_in_touch',
    component: GetInTouchComponent,
  }, {
    path: 'abouts',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
