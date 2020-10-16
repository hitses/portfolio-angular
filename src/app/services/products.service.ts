import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductPage } from '../interfaces/product-page.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: ProductPage[] = [];
  filteredProducts: ProductPage[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  // tslint:disable-next-line: typedef
  private getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-portfolio-e38b1.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductPage[]) => {
          this.products = resp;
          this.loading = false;
          resolve();
        });
    });
  }

  // tslint:disable-next-line: typedef
  getProduct( id: string) {
    return this.http.get(`https://angular-portfolio-e38b1.firebaseio.com/products/${id}.json`);
  }

  // tslint:disable-next-line: typedef
  searchProduct(value: string) {
    if (this.products.length === 0) {
      this.getProducts()
      .then( () => {
        this.filterProducts(value);
      });
    } else {
      this.filterProducts(value);
    }
  }

  // tslint:disable-next-line: typedef
  private filterProducts(value: string) {
    this.filteredProducts = [];

    value = value.toLowerCase();

    this.products.forEach(prod => {
      const LOWER_TITLE = prod.titulo.toLowerCase();
      if (prod.categoria.indexOf(value) >= 0 || LOWER_TITLE.indexOf(value) >= 0) {
        this.filteredProducts.push(prod);
      }
    });
  }
}
