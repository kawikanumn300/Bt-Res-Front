import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name: any;
  lastname: any;
  sess: any;
  userid: any;
  userbalane: any
  userdata: any;
  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private http: HttpClient) { }
  isLoggedIn$!: Observable<boolean>;
  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();

  ngOnInit(): void {
    if (!sessionStorage.getItem('key')) {
      this.router.navigate(["/login"]);
    }

    this.sess = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.isLoggedIn$ = this.sess;
    this.userid = this.sess.Value.USER_ID
    this.http.get<BtResUser>(baseUrl + '/' + this.userid).subscribe(response => {
      this.userdata = response.Value
      this.userbalane = this.userdata.USER_BALANCE
    }
    )
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
