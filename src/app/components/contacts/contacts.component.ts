import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  
  constructor(private titleService: Title) {}


  ngOnInit() {
    this.setDynamicTitle("Contacts");
  }

  private setDynamicTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }
}
