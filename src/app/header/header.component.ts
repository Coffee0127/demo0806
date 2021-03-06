import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

import { MypipePipe } from '../mypipe.pipe';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  pipes: [MypipePipe]
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'The Will Will Web!!';
  pageTitleLink = 'http://blog.miniasp.com/';

  hot: string[] = [ 'Visual Studio', 'IT', '20', '偵錯' ];

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
