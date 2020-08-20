import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    SharedModule,
    FormsModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
