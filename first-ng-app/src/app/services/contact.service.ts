import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class ContactService {

  constructor(public http: Http) { }

  //CRUD logic
  //1. addContact
  addContact( _contactData: {} ){
    console.log(_contactData);
    return this.http.post("https://jsonplaceholder.typicode.com/users", _contactData)
        .map(response => {
          //receive response in service
          console.log(response);
          //send resp back to component
          return response.json();
        });
  }

  //2. getContacts
  getContacts(){
    console.log("Inside getContacts");
    return this.http.get( "https://jsonplaceholder.typicode.com/users")
      .map(response => {
        //receive response in service
        console.log(response);
        //send resp back to component
        return response.json();
      });
  }

  //3. getContactDetail
  getContactById(_id: number){
    console.log(_id);
    return this.http.get( `https://jsonplaceholder.typicode.com/users/${_id}`)
      .map(response => {
        //receive response in service
        console.log(response);
        //send resp back to component
        return response.json();
      });
  }

  //4. updateContactById
  updateContactById( _contactData ){
    console.log(_contactData);
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${_contactData.id}`, _contactData)
      .map(response => {
        //receive response in service
        console.log(response);
        //send resp back to component
        return response.json();
      });
  }

  //5. deletecontact
  deleteContactById( _id: number ){
    console.log(_id);
  }
}
