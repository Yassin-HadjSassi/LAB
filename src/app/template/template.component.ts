import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  isLogin:boolean=false;

  constructor(private auth:AuthService, private router:Router){

    this.router.events.subscribe(()=>{
      this.isLogin = this.router.url.includes('/login')
    })

  }

  logout():void{
    this.auth.signOut().
    then(()=>{
      this.router.navigate(['/login'])
    })
  }

}
