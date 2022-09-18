import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { volanteer } from 'src/app/model/volanteer.model';
import { SchedulingService } from '../scheduling.service';

@Component({
  selector: 'app-schedulig',
  templateUrl: './schedulig.component.html',
  styleUrls: ['./schedulig.component.css']
})
export class ScheduligComponent {
  day!: number;
  public option: volanteer[][] = [];
  public saveVol!: string [];

  scheduligForm: FormGroup = new FormGroup({
    "sunday": new FormControl(""),
    "monday": new FormControl(""),
    "tuesday": new FormControl(""),
    "wednesday": new FormControl(""),
    "thursday": new FormControl(""),
    "friday": new FormControl(""),
  });

  constructor(private _schedulingService: SchedulingService) { }

 
  saveChangs(){
   
    let arr = [this.scheduligForm.value.sunday,
    this.scheduligForm.value.monday,
    this.scheduligForm.value.tuesday,
    this.scheduligForm.value.wednesday,
    this.scheduligForm.value.thursday,
    this.scheduligForm.value.friday]
     this._schedulingService.saveArayOfVolenteer(arr);
    //  this._schedulingService.saveScheduling(arr);
  }

    
  ngOnInit(): void {
    for (let index = 0; index < 6; index++) {
      this._schedulingService.getVolenteerByDayFromSever(index).subscribe(vola => {

        this.option[index] = (vola);
      });
    }
    this._schedulingService.getSaveVolanteers().subscribe(save=>{
      this.saveVol=save;
    });
    console.log("the volunteers:", this.option);
  }
}