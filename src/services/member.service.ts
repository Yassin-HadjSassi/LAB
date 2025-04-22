import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root'
})
// role du decorateur : permettre d'utiliser 
// injecter le service dans les comlposants /service
export class MemberService {

  constructor(private http:HttpClient) {
    
  }

  GetAllMembers():Observable<Member[]>
  {
    //mode get
    return this.http.get<Member[]>
    ('http://localhost:3000/members')
  }

  addMember(x:Member):Observable<void>
  {
    return this.http.post<void>
    ('http://localhost:3000/members',x)
  }

  getMemberById(id:string):Observable<Member>
  {
    return this.http.get<Member>
    (`http://localhost:3000/members/${id}`)
  }

  updateMember(f:Member,id:string):Observable<void>
  {
    return this.http.put<void>
    (`http://localhost:3000/members/${id}`,f)
  }

  deleteMember(id:string):Observable<void>
  {
    return this.http.delete<void>
    (`http://localhost:3000/members/${id}`)
  }
}
