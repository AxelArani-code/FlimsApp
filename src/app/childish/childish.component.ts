import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childish',
  templateUrl: './childish.component.html',
  styleUrls: ['./childish.component.css']
})
export class ChildishComponent implements OnInit {
public title1 =['Dos adolescentes elfos, Ian y Barley, se embarcan en un viaje para descubrir si todavía existe algo de magia para poder pasar un último día con su padre, quien falleció cuando eran muy pequeños para recordarlo.'];
public title2 =['Cuando su nave espacial es destruida, Willy es separado de sus padres y aterriza en un planeta salvaje e inexplorado donde con la ayuda de Buck, un robot de supervivencia, tendrá que esperar hasta que llegue una misión de rescate.'];
public title3 =['Un simple acto bondadoso siempre despierta otro, incluso en un lugar helado y distante. Cuando el nuevo cartero de Smeerensburg, Jesper, hace amistad con el fabricante de juguetes Klaus, sus regalos derriten una antigua disputa y entregan un trineo lleno de tradiciones navideñas.'];
public title4 =['Luego de la muerte de su padre, un cachorro de león huye del reino solo para aprender el verdadero significado de la responsabilidad y la valentía.'];
public title5 =['Después de que un experimento científico llevara a la creación de un clon de Mewtwo, él decide destruir el mundo. Ahora Ash y sus amigos deben intentar detener los planes malignos de Mewtwo.'];
public title6 =['Cuando un nuevo juguete llamado Forky se une a Woody y el resto del grupo, un viaje en carretera junto a viejos y nuevos amigos revela qué tan grande puede ser el mundo para un juguete.'];


  constructor() { }

  ngOnInit(): void {
  }

}
