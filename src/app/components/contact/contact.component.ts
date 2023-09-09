import { Component  } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  dynamicColor:string;
  isInputFocus:boolean = true;
  constructor(private titleService: Title) {
    this.dynamicColor= "#2c3e50";
    titleService.setTitle("Contact")
  }
  viewLabel(value:any) {
  }
}