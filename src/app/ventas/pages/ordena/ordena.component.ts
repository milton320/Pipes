import { Component, OnInit } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.intefaces';

@Component({
  selector: 'app-ordena',
  templateUrl: './ordena.component.html',
  styles: [
  ]
})
export class OrdenaComponent implements OnInit {

  enMayuscula :boolean= true;
  ordenarPor: string = '';

  heroes: Heroe[]=[
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre:'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ]

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden( valor: string){
    this.ordenarPor = valor;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
