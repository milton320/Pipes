import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenaComponent } from './ventas/pages/ordena/ordena.component';

const routes: Routes = [
  {
    path:'',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

]

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
