import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'volar'
})

export class VolarPipe implements PipeTransform{
    transform(valor:boolean ){
  
        return (valor)?'vuela':'no vuela';
    }       
}