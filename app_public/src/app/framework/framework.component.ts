import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  router: Router;
  auth: AuthService;
  constructor(
    private _router: Router,
    private _auth: AuthService
  ) {
    this.router = _router;
    this.auth = _auth;
   }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
