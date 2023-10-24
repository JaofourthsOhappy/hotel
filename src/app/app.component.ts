import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template:`<h1> Hello World! from inline template! </h1>
  // <p> Hi Angular is Awesome </p>`,
  styleUrls: ['./app.component.css'],
  // styles:  [`h1 { color : blue;}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role  = 'Admin';
}
