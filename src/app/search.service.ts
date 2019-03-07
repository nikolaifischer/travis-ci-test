import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {
  }
  search(term: string): Promise <JSON> {
    const options =  {headers: {
        'Accept': 'application/json',
        // "Content-Type": "application/x-www-form-urlencoded",
    }
  };
    const url = `https://icanhazdadjoke.com/search?term=${term}`;
    return fetch(url, options).then(res => res.json());
  }
}
