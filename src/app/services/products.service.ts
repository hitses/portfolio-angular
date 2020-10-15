import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductPage } from '../interfaces/product-page.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: ProductPage[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  // tslint:disable-next-line: typedef
  private getProducts() {
    this.http.get('https://angular-portfolio-e38b1.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductPage[]) => {
        console.log(resp);

        this.products = resp;
        this.loading = false;
      });
  }
}
