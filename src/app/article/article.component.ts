import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';
import { Pub } from 'src/models/Pub';
import { PubService } from 'src/services/pub.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  dataSource: MatTableDataSource<Pub>;

  constructor(private PS:PubService){

    this.dataSource = new MatTableDataSource();

  }

  displayedColumns: string[] = ['id', 'type', 'titre', 'lien', 'date', 'sourcepdf'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchData(){
    this.PS.getAllPub().subscribe((res)=>{
      this.dataSource.data = res
    })
  }

  ngOnInit(){
    this.fetchData()
  }

}
