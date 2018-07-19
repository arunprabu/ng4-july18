import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
  public contactArr: any[] = [  
  ];
  
  constructor( private contactService: ContactService){
    console.log("Inside constructor");
  }

  ngOnInit(){
    console.log("Inside ngOnInit");
    this.contactService.getContacts()
      .subscribe( (resp: any) => {
        console.log(resp);
        this.contactArr = resp;
      });
  }
}
