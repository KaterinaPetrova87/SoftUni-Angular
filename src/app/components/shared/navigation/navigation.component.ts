import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  dropdownLi : string = "nav-item dropdown";
  dropdownMenu : string = "dropdown-menu";

  constructor(private authService: AuthService,private toastr: ToastrService, private router: Router) { }

  logout() {
    this.authService
      .signOut()
      .subscribe(data => {
        // localStorage.clear();
        // this.authService.authtoken = '';
        // this.toastr.success('Logout successful', 'Success');
        // this.router.navigate(['/home']);
      }, err => {
        // this.toastr.error(err.error.description, 'Warning!')
      })
  }

  expand() {
    this.dropdownLi.endsWith('show') 
    ? this.dropdownLi = "nav-item dropdown" 
    : this.dropdownLi = "nav-item dropdown show";

    this.dropdownMenu.endsWith('show')
    ? this.dropdownMenu = "dropdown-menu"
    : this.dropdownMenu = "dropdown-menu show";
  }

  ngOnInit() {
  }

}
