import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  calcName = "Arun's Calculator App";

  constructor() { }

  ngOnInit() {
  }

  add(input1, input2){
    if(input1 >0 && input2 > 0){
      return input1 + input2;
    }else{
      return 'error';
    }
  }

  subtract(input1, input2){
    return input1 - input2;
  }

}
