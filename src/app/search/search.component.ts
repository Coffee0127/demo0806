import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  content: string;

  @Output()
  search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

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

  // with 範本參考物件
  showText2(event: KeyboardEvent, input: HTMLInputElement) {
    if (event.keyCode == 13) {
        this.content = input.value;
        this.search.emit(input.value);
    }
  }

}
