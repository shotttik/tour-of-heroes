import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // hero_id any;:

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.heroeData();
  }

  goBack() {
    this.location.back();
  }

  heroeData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

}