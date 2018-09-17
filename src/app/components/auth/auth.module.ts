import { NgModule } from '@angular/core';
import { authComponents } from './index';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ...authComponents
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: []
})
export class AuthModule { }