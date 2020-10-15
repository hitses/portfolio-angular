import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { DescriptionProduct } from '../../interfaces/productDescription.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  productId: string;
  product: DescriptionProduct;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parameters => {
      this.productService.getProduct(parameters.id)
      .subscribe(
        (product: DescriptionProduct) => {
          this.productId = parameters.id;
          this.product = product;
        }
      );
    });
  }

}
