import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPagesComponent } from './pages/product-pages/product-pages.component';

const routes: Routes = [
  {
    path: '', 
    // component: Component,
    children: [
      { path: 'products', component: ProductPagesComponent },
      { path: '**', redirectTo: 'products' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
