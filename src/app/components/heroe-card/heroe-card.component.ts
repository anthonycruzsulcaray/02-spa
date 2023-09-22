import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroeInput: any = {};
  @Input() heroeIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  verHeroe() {
    console.log(this.heroeIndex);
    this.router.navigate(['/heroe', this.heroeIndex]);
  }
}
