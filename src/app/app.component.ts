import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-one';
  parentMessage:string = 'Message from your parent.'
  forTest:string = 'This messagee should go to the test component.'
}

