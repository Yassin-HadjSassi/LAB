import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pub } from 'src/models/Pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http:HttpClient) { }

  getAllPub():Observable<Pub[]>
  {
    return this.http.get<Pub[]>
    ('http://localhost:3000/pubs')
  }

}
