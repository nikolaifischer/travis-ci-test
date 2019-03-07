import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dad-joke-generator';
  joke = ' ';

  constructor(private searchService: SearchService) {

  }
  onFinished(event: Event) {
    console.log('On finished');
    console.log(event);
    this.joke = event['joke'];

  }

}
