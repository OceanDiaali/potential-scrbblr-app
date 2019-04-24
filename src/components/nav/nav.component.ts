import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  gapi: any;

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

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    /*console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.*/
  }

  signOut() {
    const auth2 = this.gapi.auth2.getAuthInstance();
    auth2.signOut().then( () => {
      console.log('User signed out.');
    });
  }

} // class
