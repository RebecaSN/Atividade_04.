import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula_3.0';

  constructor(private _snackBar: MatSnackBar) {
    
  }

  openSnackBar():void{
    this._snackBar.open('Pacote comprado', 'fechar')
  }

  



  
}

