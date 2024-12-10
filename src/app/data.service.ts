import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [
    { id: 1, name: 'livre 1', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4S1YG5bumJ4bym15M0_HMp2udtSqYCkf4Q&s' },
    { id: 2, name: 'livre 2', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB_nqZcxWeXfsI3pIH6KjB8E9F88Z-DY5LjA&s' },
    { id: 3, name: 'livre 3', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXoBN63cw1FVftMFksXPKzcadrue88NSEJg&s' },
    { id: 4, name: 'livre 4', price: 40, image: 'https://mylibrairie.ma/22917-home_default/a-tout-jamais-de-colleen-hoover.jpg' },
    { id: 4, name: 'livre 5', price: 80, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPlMSQoWn0v5wf--oqEgC_KalBsAl9HMWTQ&s' },
    { id: 4, name: 'livre 6', price: 40, image: 'https://cdn1.booknode.com/book_cover/1110/mod11/a_premiere_vue-1109769-264-432.jpg' },
  ];

  private cart: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}

