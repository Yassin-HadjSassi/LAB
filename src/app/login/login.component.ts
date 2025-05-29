import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  password:string=""

  constructor(private auth:AuthService, private router:Router){}

  sub():void{
    console.log(this.email," / ",this.password)
    this.auth.signInWithEmailAndPassword(this.email,this.password).
    then((res)=>{
      console.log(res)
      this.router.navigate(['/members'])
    })
  }

}
