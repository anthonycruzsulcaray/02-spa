import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  keyword: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.keyword = params['keyword'];
      // console.log(params['keyword']);
      this.heroes = this._heroesService.buscarHeroes(params['keyword']);
      console.log(this.heroes);
    });
  }

  /*
  verHeroe(index: number) {
    this.router.navigate(['/heroe', index]);
  }*/
}
