import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //unigue name which allows for reference in other areas of the app
  templateUrl: './app.component.html', //specifies the html file
  styleUrls: ['./app.component.scss'] // sass or css file
})

//all of the logic JS goes here
export class AppComponent {
  title = 'ng7';
}
