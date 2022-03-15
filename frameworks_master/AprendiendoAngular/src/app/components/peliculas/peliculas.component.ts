import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Array<any>

  constructor() {

    this.peliculas = [
      {
        year:2019,
        title: "Spiderman",
        image: 'https://dam.smashmexico.com.mx/wp-content/uploads/2017/05/spider-man-3-y-su-edicion-alternativa-cover.jpg'
      },
      {
        year:2018,
        title: "Avengers",
        image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg'
      },
      {
        year:2015,
        title: "Batman",
        image: 'https://imagenes.elpais.com/resizer/c222sh89e2kpFZETxd208IGztAw=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z7OXACA63JB57PNTW4S4BFJQCQ.jpg'
      }, 

    ]

  }

  ngOnInit(): void {

    console.log(this.peliculas?.length)
  }

}
