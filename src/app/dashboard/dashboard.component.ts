import { Component } from '@angular/core';
import { Evt } from 'src/models/Evt';
import { Member } from 'src/models/Member';
import { Pub } from 'src/models/Pub';
import { EvtService } from 'src/services/evt.service';
import { MemberService } from 'src/services/member.service';
import { PubService } from 'src/services/pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Nb_Members:number=0;
  Nb_Events:number=0;
  Nb_Pub:number=0;
  Nb_Student:number=0;
  Nb_Teacher:number=0;

  members:Member[]=[]
  events:Evt[]=[]
  pubs:Pub[]=[]

  chartDatabar: ChartDataset[] = [{label: 'Lieu', data: []}];
  chartLabelsbar: string[] = [];
  chartOptions: ChartOptions = {};

  chartDataline: ChartDataset[] = [{label: '', data: []}];
  chartLabelsline: string[] = [];

  chartDataPie: ChartDataset[] = [
    {
      label: 'Members',
      data: []
    }
  ];
  chartLabelsPie: string[] = ['Student', 'Teacher'];
  tab_Evt: number[] =[];

  constructor(private MS:MemberService, private ES:EvtService, private PS:PubService){

    this.MS.GetAllMembers().subscribe((res)=>{
      this.members = res
      this.Nb_Members = res.length

      // for(let i=0;i<this.Nb_Members;i++){
      //   if(res[i].type=="student") this.Nb_Student++;
      //   else this.Nb_Teacher++;
      // }

      this.Nb_Student = (res.filter(m=> m.type=='student')).length;
      this.Nb_Teacher = (res.filter(m=> m.type=='teacher')).length;
       
      this.chartDataPie = [{data :[this.Nb_Student,this.Nb_Teacher]}]

      this.chartLabelsline = res.map( e => e.name)
      for(let iterator of this.chartLabelsline){
        const nb_evt = res.filter(e => e.name == iterator)[0].tab_Evt.length
        console.log(nb_evt)
        this.tab_Evt.push(nb_evt)
      }
      this.chartDataline = [{label: 'Nb events / member',data : this.tab_Evt}]

    })

    this.ES.GetAllEvts().subscribe((res)=>{

      this.events = res
      this.Nb_Events = res.length

      this.chartLabelsbar = [...new Set(res.map( e => e.Lieu))]

      for(let iterator of this.chartLabelsbar){
        const count = (res.filter(e => e.Lieu == iterator)).length
        this.tab_Evt.push(count)
      }

      this.chartDatabar = [{label: 'Nb events',data : this.tab_Evt}]
      
    })

    this.PS.getAllPub().subscribe((res)=>{
      this.pubs = res
      this.Nb_Pub = res.length
    })

  }




}
