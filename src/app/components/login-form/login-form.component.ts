import { Component, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() isSignUp: boolean = true;

  formUser!: FormGroup;
  
  defaultFields = {
    email: new FormControl(''),
    password: new FormControl(''),
  }

  extraFields = {
    name: new FormControl(''),
    lastName: new FormControl(''),
  }

  constructor(
    private fb:FormBuilder
  ) { 
    this.initForm();
  }

  initForm(){
    let userFields = {...this.defaultFields}
    if(this.isSignUp){
      userFields = {...this.defaultFields, ...this.extraFields}
    }
    this.formUser = this.fb.group({
      userFields
    })
  }

  onSubmit(){
    if(this.formUser.invalid){
      alert("debe ingresar todos los inputs");
      return;
    }
    console.log('Mi Formulario', this.formUser.value);
  }
}
