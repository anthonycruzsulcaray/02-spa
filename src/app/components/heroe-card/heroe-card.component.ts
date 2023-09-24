import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {
  @Input() heroeInput: any = {};
  @Input() heroeIndex: number = 0;
  @Output() heroeSelected: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {
    this.heroeSelected.emit(this.heroeIndex);
  }

  ngOnInit() {}

  verHeroe() {
    // console.log(this.heroeIndex);
    this.router.navigate(['/heroe', this.heroeIndex]);
    //this.heroeSelected.emit(this.heroeIndex);
  }
}
