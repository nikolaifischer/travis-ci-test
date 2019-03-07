import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() text: String;
  constructor() { }

  ngOnInit() {
    //this.text = this.dataService.getJoke();
  }

  // event listener?

}
