import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchTerm;
  public joke = '';
  @Output() finished = new EventEmitter();
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search(event: Event) {
    event.preventDefault();
    this.searchService.search(this.searchTerm).then(resJson => {
      console.log(resJson);
      const results = resJson['results'];
      if (results) {
        this.joke = results[0].joke;
        this.finished.emit({joke: this.joke});
      }
    });
  }

}
