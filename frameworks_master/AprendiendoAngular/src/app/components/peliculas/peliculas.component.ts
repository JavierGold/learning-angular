import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<Pelicula>;

  constructor() {

    this.peliculas = [
      new Pelicula("Spiderman", 2019, "https://dam.smashmexico.com.mx/wp-content/uploads/2017/05/spider-man-3-y-su-edicion-alternativa-cover.jpg"),
      new Pelicula("Los vengadores Endgame", 2018, "http://as01.epimg.net/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg"),
      new Pelicula("Batman", 2015, "https://imagenes.elpais.com/resizer/c222sh89e2kpFZETxd208IGztAw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z7OXACA63JB57PNTW4S4BFJQCQ.jpg")

    ]

  }

  ngOnInit(): void {

    console.log(this.peliculas?.length)
  }

}
