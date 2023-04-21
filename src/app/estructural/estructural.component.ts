import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructural',
  templateUrl: './estructural.component.html',
  styleUrls: ['./estructural.component.scss']
})
export class EstructuralComponent implements OnInit {
  isError = false;

  sections = [
    {id: 1, name: 'Introduccion' , duracion: '10:00'},
    {id: 1, name: 'Usos de Angular' , duracion: '5:00'},
    {id: 1, name: 'Instalacion de entorno' , duracion: '9:00'},
];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sections.push({ id: 1, name: 'Usos de Angular' , duracion: '5:00'} );
    }, 4000);
  }
  showError(){
    this.isError = true;

  }
}
