import { Component, OnInit } from '@angular/core';
import { UserSignupModel } from '../../../core/models/auth-models/user.signup.model';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  bindingModel: UserSignupModel;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { 
    this.bindingModel = new UserSignupModel('', '', '', '', '');
  }

  register() {
    delete this.bindingModel['confirmPassword']
    this.authService.signUp(this.bindingModel)
      .subscribe(user => {
        // this.toastr.success('Register successful', 'Success');
        // this.router.navigate(['/auth/signin']);
      }, err => {
        // this.toastr.error(err.error.description, 'Warning!');
      });
  }

  ngOnInit() {
  }

}
