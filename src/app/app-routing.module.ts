import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signals', 
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule)
  },
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '**', 
    redirectTo:'signals'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
