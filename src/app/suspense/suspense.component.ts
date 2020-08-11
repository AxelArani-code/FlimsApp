import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.component.html',
  styleUrls: ['./suspense.component.css']
})
export class SuspenseComponent implements OnInit {
public title1 =['Un carismático joyero en Nueva York lleva a cabo una serie de apuestas riesgosas que podrían darle una gran granancia. Howard debe manejar un precario acto, equilibrando negocio, familia y cada vez más adversarios en su búsqueda incansable de la ganancia definitiva.'];
public title2 =['Tres hermanos en Appalachia intentan tener éxito como traficantes de opioides, mientras tratan de no descender en la espiral de violencia que viene con el territorio.'];
public title3 =['Un asesino vive en una cabaña aislada al borde de un lago. Un día, una mujer herida llega al frente de su casa. Para salvarla, podría arriesgar su propia vida.'];
public title4 =['En Ciudad Gótica, Arthur Fleck es un comediante con problemas mentales que es maltratado por la sociedad. Entonces cae en una espiral descendiente de revolución y crimen que lo lleva cara a cara con su alter ego: el Guasón.'];
public title5 =['Rambo debe enfrentar su pasado y desempolvar sus implacables habilidades de combate para vengarse en una misión final. Un viaje mortal de venganza.'];
public title6 =['Ray y su familia se bajan en una tienda en la carretera donde su hija se cae y se rompe el brazo. En el hospital, su esposa e hija bajan para una tomografía mientras Ray, exhausto, se duerme en la sala de espera. Al despertar, el hospital no tiene ningún registro o conocimiento de la familia de Ray.'];

  constructor() { }

  ngOnInit(): void {
  }

}
