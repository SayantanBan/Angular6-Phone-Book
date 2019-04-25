import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactDetails } from 'src/app/shared/models/Contact';
import { ContactService } from 'src/app/shared/services/contact.service';
import { getMaxListeners } from 'cluster';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {

  selectedContactCountRadioButton: string = 'All';
  _listFilter: string;
  filteredContactList: ContactDetails[];
  p: number = 1;


  constructor(private contactService: ContactService, private toastrService: ToastrService) { }

  ngOnInit() {
    // this.contacts = [
    //   new ContactDetails(1,"Sayantan","Banerjee","sayantan.banerjee@cgi.com",191982912, null),
    //   new ContactDetails(2,"Pranav","Das","pranav.das@cgi.com",23412341, "family"),
    //   new ContactDetails(3,"John","Doe","john.doe@cgi.com",1234234, "family"),
    //   new ContactDetails(4,"Wayne","Bruce","wayne.bruce@cgi.com",32554234234, "business"),
    //   new ContactDetails(5,"Cristiano","Roanldo","cristiano.ronaldo@cgi.com",32554234234, "colleague"),
    // ];

    this.getList();
    this.contactService.getContactList();

  }

  getList(): void {
    this.contactService.getContact().subscribe(res => {
      this.filteredContactList = res
    },
      err => console.log(err)
    )
  }

  getAllContactsCount(): number {
    return this.filteredContactList.length;
  }

  getFamilyContactsCount(): number {
    return this.filteredContactList.filter(e => e.group === 'Family').length;
  }

  getFriendContactsCount(): number {
    return this.filteredContactList.filter(e => e.group === 'Friend').length;
  }

  getOfficeContactsCount(): number {
    return this.filteredContactList.filter(e => e.group === 'Office').length;
  }

  onContactsCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedContactCountRadioButton = selectedRadioButtonValue;
  }

  get listFilter(): string {
    // console.log("getter");
    // console.log(this._listFilter);

    return this._listFilter;
  }

  set listFilter(value: string) {
    // console.log("setter");
    this._listFilter = value.toLowerCase();

    this.filteredContactList = this.listFilter ? this.performFilter(this.listFilter) : this.contactService.contactList;
  }

  performFilter(filterBy: string): ContactDetails[] {
    return this.contactService.contactList.filter((contact: ContactDetails) =>
      contact.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
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
        this.toastrService.error('Phone Book!', 'Successfully Deleted!')
      },
        error => {
          console.log(error);
          this.toastrService.error('Phone Book!', 'Something Bad Happened!')
        }
      )
  }

}
