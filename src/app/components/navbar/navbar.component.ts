import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarShrunk: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarShrunk = (window.pageYOffset > 50);
  }
}
