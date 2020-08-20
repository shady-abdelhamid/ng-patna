import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  showImage: boolean;

  filteredProducts: Product[] = [];
  products: Product[] = [];

  _filter: string = '';
  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.filteredProducts = this.filter
      ? this.performFilter(this.filter)
      : this.products;
  }

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  /**
   * filter function for products
   * @param filterBy criteria used to filter products
   */
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  /**
   * toggle used to show or hide product images
   */
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
