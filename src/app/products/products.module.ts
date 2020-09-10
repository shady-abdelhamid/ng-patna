import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductEditComponent],
  imports: [
    SharedModule,
    FormsModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
