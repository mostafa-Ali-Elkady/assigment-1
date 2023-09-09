import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  dynamicColor:string;
  clickedSrc:any;
  showImage:boolean = true
  constructor(private titleService: Title){
    this.dynamicColor= "#2c3e50";
    titleService.setTitle("Portfolio");
    
  }
  getImageSrc(event:any){
    let target = event.target as HTMLElement;
    let image = target.previousSibling as HTMLImageElement;
    this.clickedSrc = image.src;
  }
  toggleImage() {
  return this.clickedSrc = !this.clickedSrc;

  }
}
