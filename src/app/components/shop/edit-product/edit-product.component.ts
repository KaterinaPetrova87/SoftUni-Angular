import { Component, OnInit } from '@angular/core';
import { ProductCreateModel } from '../../../core/models/product-models/product-create.model';
import { ProductService } from '../../../core/services/products/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  bindingModel: ProductCreateModel;
  productId: string;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.productService.getProductDetails(this.productId)
      .subscribe(data => {
        this.bindingModel = data;
      })
  }

  edit() {
    const body = {
      author: this.bindingModel['author'],
      name: this.bindingModel.name,
      image: this.bindingModel.image,
      description: this.bindingModel.description,
      price: this.bindingModel.price
    }
    this.productService.editProduct(this.productId, body)
      .subscribe(data => {
        this.toastr.success('Product edited', 'Success!');
        this.router.navigate(['products/all']);
      }, err => {
        // console.log(err);
      })
  }
}
