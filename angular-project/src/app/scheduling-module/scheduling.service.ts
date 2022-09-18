import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { volanteer } from '../model/volanteer.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private _http: HttpClient) { }
  arr!: volanteer[];

  getVolenteerByDayFromSever(day: number): Observable<volanteer[]> {
    return this._http.get<volanteer[]>("api/Volanteer/GetByDay/?day=" + day);
  }

  getSaveVolanteers(): Observable<string[]> {
    return this._http.get<string[]>("api/Volanteer/GetSave");
  }

  // saveScheduling(save:String[]){
  //   return this._http.post("/api/Volanteer/",save).subscribe(res => console.log(res));
  // }

  saveArayOfVolenteer(volu:string[]){
    return this._http.put("api/Volanteer/PutArayOfVol", volu).subscribe(res =>{
        alert("המערך נשמר בהצלחה") ;  
        console.log(res)
    });
  }
}
