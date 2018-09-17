import { NgModule } from '@angular/core';
import { shopComponents } from './index';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ...shopComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    NgxPaginationModule
  ],
  providers: []
})
export class ProductModule { }