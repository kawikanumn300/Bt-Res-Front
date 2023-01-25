import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: any;
  lastname: any;
  sess:any;
  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal) { }
  isLoggedIn$!: Observable<boolean>;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  ngOnInit(): void {
    if(!sessionStorage.getItem('key')){
      this.router.navigate(["/login"]);
    }

       this.sess = JSON.parse(sessionStorage.getItem('key')||'{}' );
       this.isLoggedIn$ = this.sess;

  }

  logout() {
    const modalRef = this.modalService.open(LogoutModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        sessionStorage.clear();
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    });
  }
}
