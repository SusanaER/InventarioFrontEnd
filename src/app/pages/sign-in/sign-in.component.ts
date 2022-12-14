import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signInResponse ,signIn } from 'src/app/core/interfaces/user';
import { AccountService } from 'src/app/core/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(
    private login: AccountService,
    private router: Router
  ) { }

  respForm(request: signIn){
    this.login.SignIn(request).subscribe(response => {
      
      if(response.hasError){
        alert('Valida tus credenciales');
      }
      if(response.message === 'Authorized'){
        environment.hasSession = true;
        this.router.navigate(['/home']);
      }else{
        alert('Valida tus credenciales');
      }
    });
  }
}
