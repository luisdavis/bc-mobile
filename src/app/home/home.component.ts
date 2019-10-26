import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

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

}
