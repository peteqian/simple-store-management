import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models';
import { HeroService } from '../shared/services';
import { Subscription } from 'rxjs';
import { HeroStore } from '../shared/stores';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private subscriptions = new Subscription();

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private heroStore: HeroStore) {}

  ngOnInit(): void {
    console.debug('[DEBUG-DASHBOARD-COMPONENT] getHeroes');
    this.getHeroes();

    this.subscriptions.add(
      this.heroStore.state$.subscribe((state) => {
        console.debug('[DEBUG-DASHBOARD-COMPONENT] state', state);
        this.heroes = state.heroes;
      })
    );
  }

  getHeroes(): void {
    this.heroService.loadHeroes().subscribe();
  }
}
