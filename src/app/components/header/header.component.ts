import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isVisible: boolean = false;

  isClicked: boolean = false;

  toggleVisibility() {
    console.log('clicked arrow');
    console.log(this.isVisible);
    this.isVisible = !this.isVisible;
  }

  toggleMenu() {
    console.log('clicked menu');
    console.log(this.isClicked);
    this.isClicked = !this.isClicked;
  }
  
  closeMenu() {
    console.log('close menu');
    console.log(this.isClicked);
    this.isClicked = false;
  }
}
