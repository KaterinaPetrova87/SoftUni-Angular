import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId: string;

  constructor(private productService: ProductService, 
    private toastr: ToastrService, 
    private router: Router,
    private route: ActivatedRoute,
  private location: Location) {
      this.productId = this.route.snapshot.params.id;
     }

  deleteProduct() {
    this.productService.deleteProduct(this.productId)
      .subscribe(data => {
        this.toastr.success('Product deleted', 'Success!');
        this.router.navigate(['/products/all']);
      }, err => {
        // this.toastr.error(err.error.description, 'Warning!');
      })
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
  }

}
