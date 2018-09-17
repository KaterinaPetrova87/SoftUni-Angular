import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListModel } from '../../../core/models/product-models/product-list.model';
import { ProductService } from '../../../core/services/products/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  products: Observable<ProductListModel[]>
  pageSize: number = 4;
  currentPage: number = 1;

  constructor(private productService: ProductService) { }

  changePage(page) {
    this.currentPage = page
  }

  ngOnInit() {
    this.products = this.productService.getMyProducts(localStorage.getItem('username'));
  }

}
