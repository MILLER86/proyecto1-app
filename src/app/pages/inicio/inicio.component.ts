import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
nombre = 'Miler';
apellido = 'Villegas';
loadingVisible= false;


visualizarloading(){
  this.loadingVisible = true;
  setTimeout(() => {
    this.loadingVisible = false;
  }, 2000);
}
}
