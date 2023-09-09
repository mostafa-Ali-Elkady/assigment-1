import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dynamicColor:string;
  constructor(private titleService: Title){
    this.dynamicColor= "#fff";
    titleService.setTitle("Home");

  }
}
