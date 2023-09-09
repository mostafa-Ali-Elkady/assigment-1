import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  dynamicColor:string;
  constructor(private titleService: Title){
    this.dynamicColor= "#fff";
    titleService.setTitle("About")
  }
}
