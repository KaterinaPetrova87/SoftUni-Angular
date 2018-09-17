import { Component, OnInit } from '@angular/core';
import { ProductCreateModel } from '../../../core/models/product-models/product-create.model';
import { ProductService } from '../../../core/services/products/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  bindingModel: ProductCreateModel;

  constructor(private productService: ProductService, private toastr: ToastrService, private router: Router) { 
    this.bindingModel = new ProductCreateModel('', 0, '', '');
  }

  add() {
    this.bindingModel['author'] = localStorage.getItem('username');
    this.productService.addProduct(this.bindingModel).subscribe(data => {
      // console.log(data);
      this.toastr.success('Product added', 'Success');
      this.router.navigate(['/products/all']);
    }, err => {
      // this.toastr.error(err.error.description, 'Warning!');
    });
  }

  ngOnInit() {
  }

}
