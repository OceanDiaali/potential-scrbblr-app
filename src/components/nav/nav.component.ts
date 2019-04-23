import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
  }
  w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
  }
// openNav('nav01');
  openNav(id) {
    document.getElementById('nav01').style.display = 'none';
    document.getElementById('nav02').style.display = 'none';
    document.getElementById('nav03').style.display = 'none';
    document.getElementById(id).style.display = 'block';
  }

} // class
