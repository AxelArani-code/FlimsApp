import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

public title1 =['Un equipo de investigadores oceánicos que trabajan para una compañía perforadora intenta llegar a un lugar seguro después que un misterioso terremoto destruyera sus instalaciones en el fondo de la Fosa de las Marianas.'];
public title2 =['Marcus y Mike deben confrontar cambios de carrera y crisis de edad media, cuando se unen a un equipo de élite recién creado del departamento de policía de Miami para capturar al implacable Armando Armas, líder de un cartel de drogas.'];
public title3 =['Un expatriado estadounidense intenta vender su altamente rentable negocio de marihuana en Londres, desencadenando planes, sobornos y chantajes con el objetivo de arrebatarle sus dominios.'];
public title4 =['Ray Garrison, un soldado de élite que murió en combate, es resucitado gracias a una avanzada tecnología que también le da la habilidad de fuerza sobrehumana y rápida recuperación. Basada en el comic.'];
public title5 =['Durante la búsqueda de un dúo de asesinos de policías, el detective Andre Davis comienza a descubrir uma masiva e inesperada conspiración y debe decidir a quién persigue y quién lo está persiguiendo a él.'];
public title6 =['El ex policía Spenser acaba de salir de prisión y piensa dejar Boston para siempre, pero cuando dos policías son asesinados, hace equipo con su compañero de cuarto, Hawk, para encontrar a los criminales.'];


  constructor() { }

  ngOnInit(): void {
  }

}
