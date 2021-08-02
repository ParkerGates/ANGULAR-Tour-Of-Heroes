import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../interface/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Output() done = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  whenDone() {
    this.done.emit(this.hero?.name);
  }

}
