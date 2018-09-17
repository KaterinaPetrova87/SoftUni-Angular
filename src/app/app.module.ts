import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/admin/users/users.component';

import { AppRoutingModule } from './app-routing.module';
import { ServiceModule } from './core/services/services.module';
import { AuthModule } from './components/auth/auth.module';
// import { ProductModule } from './components/shop/product.module';

import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceModule,
    AuthModule,
    // ProductModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
