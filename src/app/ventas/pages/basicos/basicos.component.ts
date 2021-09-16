import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string ="milton";
  nombreUpper: string ="MILTON";
  nombreComplet: string ="mIlTon ToRReZ";

  fecha: Date = new Date(); //fecha actual

  constructor() { }

  ngOnInit(): void {
  }

}
