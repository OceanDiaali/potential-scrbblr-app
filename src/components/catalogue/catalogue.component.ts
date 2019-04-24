import { Component, OnInit } from '@angular/core';
import { Writer } from './../writer';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  genres = [
    new Writer('./../../assets/images/cartoon-man2.png', 'Nelsom Mandingo', 'Biography'),
    new Writer('./../../assets/images/cartoon-man.png', 'Isaac Asimov', 'Science fiction'),
    new Writer('./../../assets/images/cartoon-woman2.png', 'Jane Fonder', 'Romance'),
    new Writer('./../../assets/images/cartoon-man2.png', 'Pero Dodochie', 'Horror'),
    new Writer('./../../assets/images/cartoon-woman.png', 'Chidanda Michie', 'Biography'),
    new Writer('./../../assets/images/cartoon-man.png', 'Thomas Fry', 'Science fiction'),
    new Writer('./../../assets/images/cartoon-woman2.png', 'Spanish fly', 'Romance'),
    new Writer('./../../assets/images/cartoon-man2.png', 'Bukola Sarafin', 'Horror'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
