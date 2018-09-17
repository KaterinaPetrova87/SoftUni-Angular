import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { ProductModule } from './components/shop/product.module';
import { UsersComponent } from './components/admin/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', children: [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
  ]},
  {path: 'products', loadChildren: () => ProductModule, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AdminGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }