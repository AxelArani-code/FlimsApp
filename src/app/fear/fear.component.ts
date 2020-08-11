import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fear',
  templateUrl: './fear.component.html',
  styleUrls: ['./fear.component.css']
})
export class FearComponent implements OnInit {
public title1 =['Cuando el ex de Cecilia se quita la vida y le deja su fortuna, ella sospecha que su muerte fue un engaño. Conforme una serie de coincidencias se vuelven letales, Cecilia hace todo lo posible para probar que está siendo acechada por alguien que nadie puede ver.'];
public title2 =['Años después de los eventos de El Resplandor, el ahora adulto Dan Torrance debe proteger a una niña con poderes similares de un culto conocido como The True Knot, quienes cazan niños con poderes para permanecer inmortales.'];
public title3 =['Después de que la familia de un hombre muere en un aparente asesinato, recibe una llamada de su sobrina fallecida. Ahora no está seguro si es un fantasma o está perdiendo la cabeza.'];
public title4 =['Una pareja viaja a Suecia para conocer el legendario festival de un pueblo remoto. Lo que empieza como un increíble destino se convierte en una competición cada vez más violenta y extraña en manos de un culto pagano.'];
public title5 =['Un niño recibiendo un tratamiento experimental para su enfermedad auto inmune descubre que la casa donde está viviendo no es tan segura como él imaginaba.'];
public title6 =['Después de escuchar a un niño gritar por ayuda, una joven y su hermano se aventuran en un vasto campo de hierba alta en Kansas, pero pronto descubren que podría no haber salida... y que algo extraño existe en su interior.'];

  constructor() { }

  ngOnInit(): void {
  }

}
