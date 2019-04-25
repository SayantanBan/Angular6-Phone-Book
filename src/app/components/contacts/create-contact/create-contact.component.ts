import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactDetails } from 'src/app/shared/models/Contact';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-create-contact',
    templateUrl: './create-contact.component.html',
    styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit, OnChanges, OnDestroy {

    profileForm: FormGroup;
    contact: ContactDetails = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: null,
        group: ''
    };

    newContact: ContactDetails = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: null,
        group: ''
    };

    profileSubscription: Subscription; // Important: Don't forget to unsubscribe
    constructor(private contactService: ContactService, private fb: FormBuilder, private toastrService: ToastrService) {
        this.profileForm = this.fb.group({
            id: [null],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: [''],
            phone: [null, Validators.required],
            group: ['']
        });
        this.profileSubscription = this.contactService.latestSelectedContact.subscribe(value => {
            console.log(value);
            this.contact = value;
            console.log(this.contact)
            this.profileForm.get('id').setValue(this.contact.id);
            this.profileForm.get('firstName').setValue(this.contact.firstName);
            this.profileForm.get('lastName').setValue(this.contact.lastName);
            this.profileForm.get('email').setValue(this.contact.email);
            this.profileForm.get('phone').setValue(this.contact.phone);
        });
    }
    ngOnInit() {
        this.resetForm();
    }
    ngOnChanges() {
    }
    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.profileForm.get('id').setValue(null);
        this.profileForm.get('firstName').setValue('');
        this.profileForm.get('lastName').setValue('');
        this.profileForm.get('email').setValue('');
        this.profileForm.get('phone').setValue(null);
    }
    onSubmit(): void {
        // alert("clicked");
        if (this.profileForm.get('id') == null)
            this.createNewContact();
        else
            this.updateContact();
    }

    createNewContact() {
        this.newContact.firstName = this.profileForm.get('firstName').value;
        this.newContact.lastName = this.profileForm.get('lastName').value;
        this.newContact.email = this.profileForm.get('email').value;
        this.newContact.phone = this.profileForm.get('phone').value;

        this.contactService.postContact(this.newContact)
            .subscribe(data => {
                console.log("Successfully Created", data);
                this.resetForm();
                this.toastrService.success('Phone Book!', 'Successfully Created!')
            },
                error => {
                    console.log(error)
                    this.resetForm();
                    this.toastrService.error('Phone Book!', 'Something Bad Happened!')
                }
            )
    }

    updateContact() {
        this.newContact.id = this.profileForm.get('id').value;
        this.newContact.firstName = this.profileForm.get('firstName').value;
        this.newContact.lastName = this.profileForm.get('lastName').value;
        this.newContact.email = this.profileForm.get('email').value;
        this.newContact.phone = this.profileForm.get('phone').value;

        this.contactService.putContact(this.newContact.id, this.newContact)
            .subscribe(data => {
                console.log("Successfully Updated", data);
                this.resetForm();
                this.toastrService.success('Phone Book!', 'Successfully Updated!')
            },
                error => {
                    console.log(error);
                    this.resetForm();
                    this.toastrService.error('Phone Book!', 'Something Bad Happened!')
                }
            )
    }

    ngOnDestroy(): void {
        this.profileSubscription.unsubscribe();
    }
}
