import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { ContactDetails } from 'src/app/shared/models/Contact';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: ContactDetails;
  myVar: false;

  constructor(private contactService: ContactService, private fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
  }

  setValue($event: ContactDetails): void {
    this.contact = $event;
    console.log($event.firstName);
    this.changeValue();
  }

  changeValue(){
    this.profileForm.get('firstName').setValue(this.contact.firstName);
    this.profileForm.get('lastName').setValue(this.contact.lastName);
    this.profileForm.get('phone').setValue(this.contact.phone);
    this.profileForm.get('email').setValue(this.contact.email);
    this.profileForm.get('froup').setValue(this.contact.group);
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.reset();
    this.contactService.selectedContact = {
      id : null,
      firstName : '', 
      lastName : '',
      email : '',
      phone : null,
      group: ''
    }
  }

  profileForm = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: [''],
    phone: ['', Validators.required],
    group: ['']
  })

  onSubmit(): void{
    alert("clicked");
  }

}
