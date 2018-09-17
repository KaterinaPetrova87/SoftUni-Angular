import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { CartComponent } from './cart/cart.component';

const productRoutes: Routes = [
  {path: 'all', component: ProductListComponent},
  {path: 'details/:id', component: ProductDetailsComponent},
  {path: 'mine', component: MyProductsComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'delete/:id', component: DeleteProductComponent},
  {path: 'cart', component: CartComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }