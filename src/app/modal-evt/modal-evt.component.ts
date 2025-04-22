import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EvtService } from 'src/services/evt.service';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent{

  form!:FormGroup

  //bach iwali boite (forcage de type =>MODAL)
  constructor(private ES: EvtService ,private dialogRef: MatDialogRef<ModalEvtComponent>,@Inject(MAT_DIALOG_DATA) data:any){
    if(data){
      this.ES.getEvtById(data).subscribe((res)=>{
        this.form = new FormGroup({
          Titre: new FormControl(res.Titre),
          DateDebut:new FormControl(res.DateDebut),
          Datefin:new FormControl(res.Datefin),
          Lieu:new FormControl(res.Lieu),
        })
      })
    }
    else{
      this.form = new FormGroup({
        Titre: new FormControl(null),
        DateDebut:new FormControl(null),
        Datefin:new FormControl(null),
        Lieu:new FormControl(null),
      })
    }
  }



  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
