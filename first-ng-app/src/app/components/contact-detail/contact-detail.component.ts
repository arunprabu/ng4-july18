import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //to read route params
import { ContactService } from '../../services/contact.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styles: []
})
export class ContactDetailComponent implements OnInit {
  public contactData: {};
  public contactId:number;
  private updatableContact: {} = {};

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { 
    this.activatedRoute.params.subscribe(params => {
      this.contactId = +params['id']; // (+) converts string 'id' to a number
   });
  }

  ngOnInit() {
    this.contactService.getContactById(this.contactId)
      .subscribe((resp) => {
        console.log(resp);
        this.contactData = resp;
      });
  }

  openEditModal(){
    $('#updateModal').modal({
        show: 'true'
    }); 

    this.updatableContact ={
      id: this.contactId,
      name: this.contactData['name'],
      phone: this.contactData['phone'],
      email: this.contactData['email']
    } 
  }

  editContact(f){
    console.log(f);
    console.log(this.updatableContact);
    this.contactService.updateContactById(this.updatableContact)
      .subscribe( (resp) => {
        console.log(resp);
      });
  }
}
