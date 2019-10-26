import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-shared',
  templateUrl: './main-shared.component.html',
  styleUrls: ['./main-shared.component.scss']
})
export class MainSharedComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    //TODO: this functionality should be located globally in a side bar menu by click the hammer
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  getUser(){
    return JSON.parse(localStorage.getItem("user")) || 'GUEST USER';
  }


}
