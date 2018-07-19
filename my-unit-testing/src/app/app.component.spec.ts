//importing test related modules
import { TestBed, async } from '@angular/core/testing';

//importing the component we have to test
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';

//test suite -- and it describes what feature/component under test
describe('AppComponent', () => {

  //gets executed before each spec -- asynchronous calls
  beforeEach(async(() => {
    //The following is similar to @NgModule decorators setup.
    TestBed.configureTestingModule({
      declarations: [
        AppComponent // declaration should be added (be default it will be there) then only the component can be tested
      ],
    }).compileComponents();
  }));

  //test spec 
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    // comment the above line and enable the following line then run 'ng test'.
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to My App!');
    /*
      the above line shows a test spec failure msg in the browser. That means the title of the page should be 'Welcome to My App!'. It is 'Welcome to app!'. So the test fails. 
      To fix you should correct the text in app.component.ts.
    */
    
  }));


  //we can write more test spec
  //syntax
  /*
  it('readable spec name', () => {
    actual tests..
    ..
    ..
  });
 
  */

});
