import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';
import { NavbarService } from './component/assete/NavbarService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  showNavbar: boolean = true;
  constructor(private navbarService: NavbarService){
    this.navbarService.currentShowNavbar.subscribe(showNavbar => {
      this.showNavbar = showNavbar;
    });
  }
  title = 'btres_fontend';

}
