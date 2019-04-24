import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCountComponent } from './contacts-count.component';

describe('ContactsCountComponent', () => {
  let component: ContactsCountComponent;
  let fixture: ComponentFixture<ContactsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
