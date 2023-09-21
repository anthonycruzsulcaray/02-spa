import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor( private router:Router) {}

  ngOnInit() {
    console.log('NavbarComponent');
  }

  buscarHeroe(keyword: string) {
    console.log('buscarHeroe: ', keyword);
    this.router.navigate(['/search', keyword]);
  }

  



}
