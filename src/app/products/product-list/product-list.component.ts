import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  showImage: boolean;

  filteredProducts: Product[] = [];
  products: Product[] = [];
  errorMessage: string;

  private filterValue = '';
  get filter(): string {
    return this.filterValue;
  }
  set filter(value: string) {
    this.filterValue = value;
    this.filteredProducts = this.filter
      ? this.performFilter(this.filter)
      : this.products;
  }

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

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
