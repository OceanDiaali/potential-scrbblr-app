import { Writer } from './../writer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  genres = [
    new Writer('./../../assets/images/cartoon-man.png', 'Isaac Asimov', 'Science fiction'),
    new Writer('./../../assets/images/cartoon-woman2.png', 'Jane Vagina', 'Romance'),
    new Writer('./../../assets/images/cartoon-man2.png', 'Pero Dodochie', 'Horror'),
    new Writer('./../../assets/images/cartoon-woman.png', 'Chidanda Michie', 'Biography'),
    new Writer('./../../assets/images/cartoon-man.png', 'Muhammad Busari', 'History'),
    new Writer('./../../assets/images/cartoon-woman2.png', 'John Doe', 'Horror'),
    new Writer('./../../assets/images/cartoon-man2.png', 'Dino Meniscus', 'Horror'),
    new Writer('./../../assets/images/cartoon-woman.png', 'Aisha Bamabama', 'Romance'),
  ];
// myGenre = this.genres[0];
  constructor() {}
  ngOnInit() {
  }



}
