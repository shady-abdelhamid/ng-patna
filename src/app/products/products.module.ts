import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    SharedModule,
    FormsModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
