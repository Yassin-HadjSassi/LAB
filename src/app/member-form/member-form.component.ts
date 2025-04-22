import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit{

  constructor(
    private MS:MemberService, 
    private router:Router,
    private activatedRoute : ActivatedRoute
  ){}

  form!:FormGroup;
  idcourant!:string;


  //form contient cin,name,type...
  ngOnInit(){
    // 1 chercher id
   
    //3 else -> create
    this.idcourant = this.activatedRoute.snapshot.params['id']
    //2 if exist -> edit
    if(this.idcourant){

      this.MS.getMemberById(this.idcourant).subscribe((res)=>{

      this.form = new FormGroup({ 
        cin : new FormControl(res.cin),
        name : new FormControl(res.name),
        type : new FormControl(res.type),
        createdDate : new FormControl(res.createdDate)
      })
    })
    }
    else{
      this.form = new FormGroup({
        cin : new FormControl(null),
        name : new FormControl(null),
        type : new FormControl(null),
        createdDate : new FormControl(null)
      })
    }

    // creation de linstance de form
    // init des atts a null

  }

  sub(){   

    console.log(this.form.value)

    this.idcourant = this.activatedRoute.snapshot.params['id']
    if(this.idcourant){
      this.MS.updateMember(this.form.value,this.idcourant).subscribe(()=>{
        // redirection vers ''
        this.router.navigate([''])  
      })
    }
    else{
    // appeler la fonc du service addMember
    this.MS.addMember(this.form.value).subscribe(()=>{
      // redirection vers ''
      this.router.navigate([''])  
    })
    
  }
  
}     
}
