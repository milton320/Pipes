import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenaComponent } from './pages/ordena/ordena.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VolarPipe } from './pipes/volar.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    //COMPONENTS
    OrdenaComponent,
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent,

    //PIPES
    MayusculasPipe,
    VolarPipe,
    OrdenarPipe
  ],
  exports : [
    OrdenaComponent,
    NumerosComponent,
    BasicosComponent,
    NoComunesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
