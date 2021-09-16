import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css', 
  ],
  styles:[`
    :host ::ng-deep button {
        margin-right: .5em;
    }
  `]
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = "ruddY milTon";
  valor: number = 100000000;
  obj={
    nombre: 'ruddy'
  };
  
  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
