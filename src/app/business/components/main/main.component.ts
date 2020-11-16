import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() {
    console.log("Token User ::::: "+sessionStorage.getItem("authToken"))
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
