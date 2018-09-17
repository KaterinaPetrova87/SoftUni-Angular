import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListModel } from '../../../core/models/product-models/product-list.model';
import { ProductService } from '../../../core/services/products/product.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<ProductListModel[]>;
  pageSize: number = 4;
  currentPage: number = 1;

  constructor(private productService: ProductService) { }

  changePage(page) {
    this.currentPage = page
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
