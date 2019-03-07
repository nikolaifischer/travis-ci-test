import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private joke = ' ';

  setJoke(joke: string) {
    this.joke = joke;
  }
  getJoke(): string {
    return this.joke;
  }

}
