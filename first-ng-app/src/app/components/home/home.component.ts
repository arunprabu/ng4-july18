import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum risus mi, sit amet venenatis nulla iaculis tempor. Sed vulputate mauris eget tortor vestibulum laoreet. Nulla rutrum elit efficitur, semper nisi aliquam, commodo turpis. Pellentesque aliquet massa nisi, eget suscipit magna vehicula ac. Quisque et arcu dolor. Curabitur sagittis dapibus tempus. Nullam euismod vel dui molestie porta. Nunc ac felis eleifend, vestibulum turpis vel, placerat ipsum. Mauris eleifend viverra erat eget venenatis.";
  constructor() { }

  ngOnInit() {
  }

}
