import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  dynamicColor:string;
  constructor(){
    this.dynamicColor= "#2c3e50"
  }

}
