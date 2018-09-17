import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductListModel } from '../../models/product-models/product-list.model';
import { ProductCreateModel } from '../../models/product-models/product-create.model';

const appKey = "kid_HJFVgqNIX"

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) { }

  addProduct(body) {
    return this.http.post(`https://baas.kinvey.com/appdata/${appKey}/products`, body);
  }

  getAllProducts() {
    return this.http.get<ProductListModel[]>(`https://baas.kinvey.com/appdata/${appKey}/products?query={}&sort={"_kmd.ect": -1}`);
  }

  getMyProducts(username) {
    return this.http.get<ProductListModel[]>(`https://baas.kinvey.com/appdata/${appKey}/products?query={"author":"${username}"}&sort={"_kmd.ect": -1}`);
  }

  getProductDetails(productId: string) {
    return this.http.get<ProductListModel>(`https://baas.kinvey.com/appdata/${appKey}/products/${productId}`);
  }

  editProduct(productId: String, body: ProductCreateModel) {
    return this.http.put<ProductCreateModel>(`https://baas.kinvey.com/appdata/${appKey}/products/${productId}`, body);
  }

  deleteProduct(productId) {
    return this.http.delete(`https://baas.kinvey.com/appdata/${appKey}/products/${productId}`);
  }

  getUser() {
    return this.http.get(`https://baas.kinvey.com/user/${appKey}/${localStorage.getItem('userId')}`);
  }

  updateUser(userInfo) {
    return this.http.put(`https://baas.kinvey.com/user/${appKey}/${localStorage.getItem('userId')}`, userInfo);
  }

  // private getHeaders() {
  //     return new HttpHeaders({
  //       'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
  //       'Content-Type': 'application/json'
  //     });
  //   }
}