import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { volanteer } from '../model/volanteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolenteerService {
  constructor(private _http: HttpClient) { }


  getVolenteerFromSever(): Observable<volanteer[]> {
    console.log('Server:',JSON.stringify('https://localhost:10971/api/Volanteer'))
    return this._http.get<volanteer[]>("api/Volanteer");
}
getVolenteerFromSeverById(id:string):Observable<volanteer>{
  return this._http.get<volanteer>("api/Volanteer/"+id);
}

  saveVolenteerFromSever(volu:volanteer){
    return this._http.put("api/Volanteer", volu).subscribe(res =>{
      if(res== false)
      {
        alert("אינך יכול לבטל את היום המסומן")
      }
    });
  }

}
