import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {
public title1 =['Después de la guerra civil, Jo March vive en Nueva York ganándose la vida como escritora, y reflexiona sobre su vida contando la historia de las hermanas March - cuatro jóvenes mujeres determinadas a vivir sus vidas bajo sus propios términos.'];
public title2 =['Lara Jean y Peter acaban de llevar su relación de pretender a oficialmente oficial cuando otro destinatario de una de sus viejas cartas de amor se hace presente.'];
public title3 =['Kate es una joven que toma malas decisiones. Trabajar como elfa en una tienda navideña todo el año no es bueno para la aspirante a cantante. Sin embargo, ahí conoce a Tom y su vida da un nuevo giro. Para Kate, parece muy bueno para ser cierto.'];
public title4 =['Un director de teatro y su esposa actriz atraviesan por su agotador divorcio de costa a costa que los arrastra a sus extremos creativos y personales.'];
public title5 =['A través del vínculo con su dueño que es corredor de Fórmula Uno, un golden retriever llamado Enzo aprende que las técnicas necesarias en la pista de carreras se pueden aplicar exitosamente al viaje por la vida.'];
public title6 =['La historia de Violet y Theodore, que se conocen y cambian las vidas el uno del otro para siempre. Conforme batallan con las cicatrices físicas y emocionales de su pasado, descubren que incluso los más pequeños lugares y momentos pueden significar algo.'];




  constructor() { }

  ngOnInit(): void {
  }

}
