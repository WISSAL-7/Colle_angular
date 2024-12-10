import { Component ,OnInit} from '@angular/core';
import { DataService, Product } from '../data.service';

@Component({
  standalone: false,
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls:['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private dataService: DataService) {
    this.products = this.dataService.getProducts();
  }

  addToCart(product: Product): void {
    this.dataService.addToCart(product);
    alert(`${product.name} a été ajouté au panier !`);
  }
}

