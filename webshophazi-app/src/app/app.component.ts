import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from './product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products$!: Observable<Product[]>;  
  title: any;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();  
  }

  addProduct(): void {
    const newProduct: Product = {
      id: 0,
      name: 'New Product',
      category: 'Electronics',
      description: 'Description of the new product',
      price: 100.00
    };
    this.productService.createProduct(newProduct);
  }
}
