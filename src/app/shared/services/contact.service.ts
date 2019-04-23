import { Injectable } from '@angular/core';
import { ContactDetails } from '../models/Contact';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private _contactUrl = 'assets/contact-list.json';

  selectedContact: ContactDetails;

  contactList: ContactDetails[];
  errorMessage: String;


  constructor(private _http: HttpClient) { }

  /*getEmployeeList(): Observable<IEmployee[]>{
      return this._http.get<IEmployee[]>(this._employeeUrl)
                .do(data=> console.log("All:" + JSON.stringify(data)))
                .catch(this.handleError);
  }*/


  getContact(): Observable<ContactDetails[]> {
    return this._http.get<ContactDetails[]>(this._contactUrl)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getContactList() {
    this.getContact()
      .subscribe(contacts => {
        this.contactList = contacts;
        },
        error => this.errorMessage = <any>error
      );
  }

  postContact(contact: ContactDetails): Observable<ContactDetails[]> {
    return this._http.post<ContactDetails[]>(this._contactUrl, contact)
              .pipe(
                catchError(this.handleError)
              );
  }

  putContact(id, emp) {
    return this._http.put<ContactDetails[]>(this._contactUrl + "/" + id, emp)
                    .pipe(
                      catchError(this.handleError)
                    );
  }


  deleteContact(id: number) {
    return this._http.delete(this._contactUrl + "/" + id)
              .pipe(
                catchError(this.handleError)
              );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
