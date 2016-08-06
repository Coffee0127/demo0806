import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'The Will Will Web!!';
  pageTitleLink = 'http://blog.miniasp.com/';

  @Input()
  pageSubTitle: string;

  num = 1;

  constructor(private searchSearch: SearchService) { }

  ngOnInit() {
  }

  plus(event: MouseEvent) {
    console.log(event);
    // ctrl 鍵才 +1
    event.ctrlKey && this.num++;
  }
}
