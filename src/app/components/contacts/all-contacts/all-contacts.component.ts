import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactDetails } from 'src/app/shared/models/Contact';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // this.contacts = [
    //   new ContactDetails(1,"Sayantan","Banerjee","sayantan.banerjee@cgi.com",191982912, null),
    //   new ContactDetails(2,"Pranav","Das","pranav.das@cgi.com",23412341, "family"),
    //   new ContactDetails(3,"John","Doe","john.doe@cgi.com",1234234, "family"),
    //   new ContactDetails(4,"Wayne","Bruce","wayne.bruce@cgi.com",32554234234, "business"),
    //   new ContactDetails(5,"Cristiano","Roanldo","cristiano.ronaldo@cgi.com",32554234234, "colleague"),
    // ];

    this.contactService.getContactList();

  }

  showForEdit(contact: ContactDetails) {
    console.log(contact);
    this.contactService.updateContact(contact);
  }

  onDelete(id: number) {
    console.log(id);
    this.contactService.deleteContact(id)
      .subscribe(data => {
        console.log("Successfully Deleted", data)
      },
        error => console.log(error)
      )
  }

}
