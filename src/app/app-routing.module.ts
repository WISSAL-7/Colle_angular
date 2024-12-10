import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // Redirige vers /products
  { path: 'products', component: ProductsComponent },      // Chemin pour Produits
  { path: 'cart', component: CartComponent },              // Chemin pour Panier
                 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
