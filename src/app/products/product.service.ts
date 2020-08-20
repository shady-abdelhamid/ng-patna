import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, OperatorFunction } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  /** get all products */
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  /** get product by id */
  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.productId === id))
      );
  }

  /** error handler  */
  handleError(res: HttpErrorResponse) {
    let errorMsg = '';

    const isServerSideError = res.error! instanceof ErrorEvent;

    errorMsg = isServerSideError
      ? `Server returns code: ${res.status}, error message is: ${res.message}` /* BE related error*/
      : `An error occured: ${res.error.message}` /* client-side or network error */;

    return throwError(errorMsg);
  }
}
