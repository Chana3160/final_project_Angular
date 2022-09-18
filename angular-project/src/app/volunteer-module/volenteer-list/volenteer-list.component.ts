import { Component, OnInit } from '@angular/core';
import { volanteer } from 'src/app/model/volanteer.model';
import { VolenteerService } from '../volenteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volenteer-list',
  templateUrl: './volenteer-list.component.html',
  styleUrls: ['./volenteer-list.component.css']
})

export class VolenteerListComponent implements OnInit {
  volunteers!: volanteer[];
  vol!: volanteer;

  editVolunteer(volunteerId:string){
  
   if(volunteerId!= null){
     this._navigate.navigate(['/volenDetails', volunteerId]);}
  
  // this._navigate.navigate(["/VolunteerDetails",this.selectedVolunteer.id])
  }

 

  constructor(private _volunteerService:VolenteerService,private _navigate:Router ) { }

  ngOnInit(): void {

    this._volunteerService.getVolenteerFromSever().subscribe(res=>{
      this.volunteers=res;
      console.log("the volunteers:", this.volunteers);
    });
  }


}
