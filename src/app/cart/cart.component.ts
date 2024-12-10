import { Component ,OnInit} from '@angular/core';
import { DataService, Product } from '../data.service';

@Component({
  standalone: false,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Product[] = [];
  totalPrice: number = 0;

  constructor(private dataService: DataService) {
    this.cart = this.dataService.getCart();
    this.totalPrice = this.dataService.getTotalPrice();
  }

  removeFromCart(index: number): void {
    this.dataService.removeFromCart(index);
    this.totalPrice = this.dataService.getTotalPrice();
  }
}
