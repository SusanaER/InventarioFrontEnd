import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor() { }

  respForm(response: any){
    console.log('Respuesta desde Sign Up', response);
  }
}
