interface  Contact{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    group: string
}

export class ContactDetails implements Contact{
    id: number;
    lastName: string;
    firstName: string;    
    email: string;
    phone: number
    group: string;
}