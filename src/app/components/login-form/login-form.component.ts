import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{

  @Input() isSignUp!: boolean;

  formUser!: FormGroup;

  dafaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  }

  extraFields = {
    name: new FormControl(''),
    lastName: new FormControl('')
  }

  constructor(
    private fb:FormBuilder
  ) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.initForm();
  }

  initForm(){
    let userFields = {...this.dafaultFields};
    if(this.isSignUp){
      userFields = {...this.dafaultFields, ...this.extraFields};
    }
    this.formUser = this.fb.group(
      userFields
    )
  }

  onSubmit(){
    if(this.formUser.invalid){
      alert("debes ingresar todos los inputs");
      return;
    }
    console.log("Form Submitted ", this.formUser.value);
  }

}
