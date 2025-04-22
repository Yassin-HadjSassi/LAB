import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/models/Evt';

@Injectable({
  providedIn: 'root' // ay file fil src
})
// role du decorateur : permettre d'utiliser 
// injecter le service dans les comlposants /service
export class EvtService {

  constructor(private http:HttpClient) {
    
  }

  GetAllEvts():Observable<Evt[]>
  {
    //mode get
    return this.http.get<Evt[]>
    ('http://localhost:3000/evts')
  }

  addEvt(x:Evt):Observable<void>
  {
    return this.http.post<void>
    ('http://localhost:3000/evts',x)
  }

  getEvtById(id:string):Observable<Evt>
  {
    return this.http.get<Evt>
    (`http://localhost:3000/evts/${id}`)
  }

  updateEvt(f:Evt,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://localhost:3000/evts/${id}`,f)
  }

  deleteEvt(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://localhost:3000/evts/${id}`)
  }
}
