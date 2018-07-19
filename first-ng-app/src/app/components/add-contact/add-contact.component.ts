import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {
  //for approach 2
//  @ViewChild("f2") addFormApproach2: NgForm; 

  //for approach 3
  public contactData: {} = {};
  public savedContact: {} = {};
  public statusMsg: string;

  constructor( public contactService: ContactService, private router: Router) {  // dependency injection
    
  }

  ngOnInit() {
  }

  //needed for approach 1
  onAddContact(f: NgForm){
    console.log(f.value);
  }

  onApproach2Submit(){
    //console.log(this.addFormApproach2);
  }

  onAdd(){
    console.log(this.contactData);
    this.contactService.addContact(this.contactData)
      .subscribe((addedContact: any) => { //2. get the resp from service
        console.log(addedContact);
        this.statusMsg = "Saved Successfully";
        this.savedContact = addedContact;

        setTimeout(()=>{
          this.router.navigate(['contacts'])
        }, 4000);
      });
  }
}
