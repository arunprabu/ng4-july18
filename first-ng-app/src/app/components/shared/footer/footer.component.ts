import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <hr>
    <app-nav>
      <li><a href="#gototop">Go to top</a></li>
    </app-nav>
    <div>
      Copyright &copy; 2018;
    </div>
  `,
  styles: [
    `
    div{
      color: red;
      text-align: center;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
