import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/hero';
import { HEROES } from '../../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onDone($event: string): void {
    console.log("done with: ", $event);
    this.selectedHero = undefined;
  }

}
