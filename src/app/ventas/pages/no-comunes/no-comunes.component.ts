import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles:[`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]
})
export class NoComunesComponent implements OnInit {

  //i15nselect
  nombre: String = "Ruddy";
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nplural
  clientes: string[] = ['Ruddy', 'Milton', 'arek']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': ' tenemos  1 ningun cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre(){
    this.nombre = 'Mery';
    this.genero = 'femenino';
  }
  borrarNombre(){
    this.clientes.shift();
  }

  persona = {
    nombre: 'Ruddy',
    edad: 27,
    Nac: 'La paz'
  }

  heroes= [
    {
      nombre: 'superman',
      vuela: true
    },
    {
      nombre: 'robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }

  ];

  //Async Pipe

  miObservable = interval(5000)// 0,,1,2,3,4,5,6;

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('tenemos data de promesa');
    },3500 );
  });


  constructor( ) { }

  ngOnInit(): void {
  }

}
