import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnChanges{

  @Input() isSignUp!: boolean;
  @Output() responseForm: EventEmitter<any> = new EventEmitter();

  formUser!: FormGroup;

  dafaultFields = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  }

  extraFields = {
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  }

  constructor(
    private fb:FormBuilder
  ) { 
  }

  ngOnChanges(changes: SimpleChanges): void {
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
    this.responseForm.emit(this.formUser);
  }

}
