import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private showNavbarSource = new BehaviorSubject<boolean>(true);
  currentShowNavbar = this.showNavbarSource.asObservable();

  constructor() {}

  showNavbar(show: boolean) {
    this.showNavbarSource.next(show);
  }
}
