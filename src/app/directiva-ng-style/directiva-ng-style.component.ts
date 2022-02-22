import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-style',
  templateUrl: './directiva-ng-style.component.html',
  styleUrls: ['./directiva-ng-style.component.css']
})
export class DirectivaNgStyleComponent implements OnInit {

  puntuacion: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  getColorTexto(): string {
    if (this.puntuacion !==  null && this.puntuacion >= 7) {
      return 'green';
    } else if (this.puntuacion !==  null && this.puntuacion >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

}
