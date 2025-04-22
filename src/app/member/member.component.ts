import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { Member } from 'src/models/Member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

  //injection de depandances :
  //injecter le service dans le compo
  constructor(private MS:MemberService,private dialog : MatDialog){}

  displayedColumns: string[] = ['1','2','3','4','5','6'];
  dataSource:Member[] = []

  //lancement automatique
  ngOnInit(){
    // declarer le comp subscriber
    this.MS.GetAllMembers().subscribe((data)=>{
      //action apres recu des donnes
      this.dataSource = data
    })
  }

  delete(id:string)
  {
    let dialogRef = this.dialog.open(ConfirmComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.MS.deleteMember(id).subscribe(()=>{
          this.MS.GetAllMembers().subscribe((data)=>{
            //action apres recu des donnes
            this.dataSource = data
          })
        })
      }
    })
  }

}