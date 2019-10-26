import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  getUser(){
    return JSON.parse(localStorage.getItem("user")) || 'GUEST USER';
  }

  logout(){
    //TODO: this functionality should be located globally in a side bar menu by click the hammer
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }
}
