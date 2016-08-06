import { Component } from '@angular/core';
import { HeaderComponent } from './header';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent]
})
export class AppComponent {
  title = 'app works!';
  content = '';

  // without strong type
  /*showText(event: any) {
    console.log(event);
    if (event.keyCode == 13) {
      this.content = event.target.value;
    }
  }*/

  // with strong type
  showText(event: KeyboardEvent) {
    var input = event.target as HTMLInputElement;
    if (event.keyCode == 13) {
      this.content = input.value;  
    }
  }
}
