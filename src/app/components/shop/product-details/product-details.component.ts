import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';
import { ProductListModel } from '../../../core/models/product-models/product-list.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<ProductListModel>;
  productId: string;

  constructor(private productService: ProductService, 
    private route: ActivatedRoute, 
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  addToCart() {
    this.productService.getProductDetails(this.productId)
      .subscribe(product => {
        // console.log(product);
        this.productService.getUser()
          .subscribe(userInfo => {
            let cart;
            if (userInfo['cart'] === undefined) {
              cart = {};
            } else {
              cart = userInfo['cart'];
            }
            if(cart.hasOwnProperty(this.productId)) {
              cart[this.productId] = {
                quantity: Number(cart[this.productId]['quantity']) + 1,
                product: {
                  name: product.name,
                  image: product.image,
                  price: product.price
                }
              }
            } else {
              cart[this.productId] = {
                quantity: 1,
                product: {
                  name: product.name,
                  image: product.image,
                  price: product.price
                }
              }
            }

            userInfo['cart'] =  cart;
            this.productService.updateUser(userInfo)
              .subscribe(data => {
                this.toastr.success('Product added to cart', 'Success!');
                this.router.navigate(['/cart']);
              })
          })
      }, err => {
        // console.log(err);
      })
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
    this.product = this.productService.getProductDetails(this.productId);
  }
}
