import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/models/Evt';
import { EvtService } from 'src/services/evt.service';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  constructor(private ES:EvtService,private dialog:MatDialog){}

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6'];
  
  dataSource = new MatTableDataSource();

  ngOnInit(){
    this.fetchData()
  }
  fetchData()
  {
    this.ES.GetAllEvts().subscribe((data)=>{
      this.dataSource.data = data
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  open(){
    let dialogRef = this.dialog.open(ModalEvtComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res.Titre != null){
        this.ES.addEvt(res).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

  openEdit(id : string):void{
    let x = new MatDialogConfig();
    x.data = id
    let dialogRef = this.dialog.open(ModalEvtComponent,x)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.ES.updateEvt(res,id).subscribe(() => {
          this.fetchData()
        })
      }
    })
  }

  deleteEvt(id:string)
  {
    let dialogRef = this.dialog.open(ConfirmComponent)
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.ES.deleteEvt(id).subscribe(()=>{
          this.fetchData()
        })
      }
    })
  }

}
