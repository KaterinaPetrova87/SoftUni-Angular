import { Component, OnInit } from '@angular/core';
import { UserSigninModel } from '../../../core/models/auth-models/user.signin.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  bindingModel: UserSigninModel;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.bindingModel = new UserSigninModel('', '');
   }

   login() {
     this.authService.signIn(this.bindingModel)
      .subscribe(user => {
        // this.successfulLogin(user);
        // console.log(user);
      }, err => {
        // this.toastr.error(err.error.description, 'Warning!');
      })
   }

  //  successfulLogin(data) {
  //   let roleId = '';
  //   if(JSON.stringify(data._kmd.roles)) {
  //     roleId = JSON.stringify(data._kmd.roles[0].roleId);
  //   } else {
  //     roleId = null
  //   }
  //   // this.authService.authtoken = data._kmd.authtoken;
  //   localStorage.setItem('authtoken', data._kmd.authtoken);
  //   localStorage.setItem('username', data.username);
  //   localStorage.setItem('userId', data._id);
  //   localStorage.setItem('roleId', roleId);
  //   this.toastr.success('Login successful', 'Success!');
  //   this.router.navigate(['/products/all']);
  // }

  ngOnInit() {
  }

}
