//importing test related modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//importing the component we have to test
import { CalcComponent } from './calc.component';

//test suite -- and it describes what feature/component under test
describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  //gets executed before each spec -- asynchronous calls
  beforeEach(async(() => {
    //The following is similar to @NgModule decorators setup. 
    TestBed.configureTestingModule({
      declarations: [ CalcComponent ] // declaration should be added (be default it will be there) then only the component can be tested
    })
    .compileComponents();
  }));

  //gets executed before each spec
  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //we can write more test spec
  //syntax
  /*
  it('readable spec name', () => {
    actual tests..
    ..
    ..
  });

  example spec names for calculator are here at the bottom

  */

  //these are my own test cases 
  it('should add and return number', () => {
    let output = component.add(10, 20); // the component has a method add()
    expect(output).toEqual(jasmine.any(Number)); // the output should be of any number not string
  });

  it('should add correctly', () => {
    expect(component.add(1, 2)).toEqual(3); 
    // this tests whether the add works properly or not. the output of add(1,2) should be 3. 
  });

  it('should subtract and return number', () => {
    let output = component.subtract(10, 20); //the component has a method subtract()
    expect(output).toEqual(jasmine.any(Number));
  });

  it('should multiply and return number', () => {
    // you add your own test cases
  });

  it('should divide and return number as output', function(){
    // you add your own test cases
  });

  it('should have title that contains calculator', ()=>{
    let app = fixture.debugElement.componentInstance;
    expect(app.calcName).toContain('Calculator'); // the variable in a component should contain 'Calculator' text.
  });

  it('should have title that contains author name', ()=>{
    let app = fixture.debugElement.componentInstance;
    expect(app.calcName).toContain('Arun');
    // the variable name in a component should contain 'Arun' text.
  });

});
