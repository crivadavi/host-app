import { Component } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
