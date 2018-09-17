import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/products/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Array<Object>;
  totalPrice: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getUser().subscribe(data => {
      // console.log(data['cart'])
      let products = [];
      if(data['cart']) {
      let productIds = Object.keys(data['cart']);
      for (const id of productIds) {
        let product = {
          _id: id,
          name: data['cart'][id]['product']['name'],
          image: data['cart'][id]['product']['image'],
          quantity: data['cart'][id]['quantity'],
          price: Number(data['cart'][id]['quantity']) * Number(data['cart'][id]['product']['price'])
        }
        products.push(product)
        // products.push(data['cart'][id]);
      }
      this.products = products;
      for (const product of this.products) {
        this.totalPrice += product['price'];
      }
    }
    })
  }

}
