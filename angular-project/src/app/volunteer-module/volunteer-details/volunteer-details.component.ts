import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { volanteer } from 'src/app/model/volanteer.model';
import { VolenteerService } from '../volenteer.service';


@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit, OnDestroy {

  _volunteer!: volanteer;
  volanteerToChange!: volanteer;




  saveChangs() {
    this.volanteerToChange = new volanteer();
    let arr = [this.volunteerForm.value.sunday,
    this.volunteerForm.value.monday,
    this.volunteerForm.value.tuesday,
    this.volunteerForm.value.wednesday,
    this.volunteerForm.value.thursday,
    this.volunteerForm.value.friday]
    this.volanteerToChange.id = this.volunteerForm.value.id;
    this.volanteerToChange.name = this.volunteerForm.value.name;
    this.volanteerToChange.days = arr;
    this._volunteerService.saveVolenteerFromSever(this.volanteerToChange);
    this._navigate.navigate(['/volenteer']);
  }




  volunteerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    "sunday": new FormControl(),
    "monday": new FormControl(),
    "tuesday": new FormControl(),
    "wednesday": new FormControl(),
    "thursday": new FormControl(),
    "friday": new FormControl(),
  });

  get volunteer() {
    return this._volunteer;
  }

  set volunteer(data) {
    this._volunteer = data;
    if (this.volunteer != null) {
      this.volunteerForm.controls["id"].setValue(this.volunteer.id);
      this.volunteerForm.controls["name"].setValue(this.volunteer.name);
      this.volunteerForm.controls["sunday"].setValue(this.volunteer.days[0]);
      this.volunteerForm.controls["monday"].setValue(this.volunteer.days[1]);
      this.volunteerForm.controls["tuesday"].setValue(this.volunteer.days[2]);
      this.volunteerForm.controls["wednesday"].setValue(this.volunteer.days[3]);
      this.volunteerForm.controls["thursday"].setValue(this.volunteer.days[4]);
      this.volunteerForm.controls["friday"].setValue(this.volunteer.days[5]);
    }


  }


  constructor(private _volunteerService: VolenteerService, private _rout: ActivatedRoute,private _navigate:Router) { }

  ngOnInit(): void {
    this._rout.paramMap.subscribe(params => {
      let volanteerId = (Number)(params.get('v'));
      this._volunteerService.getVolenteerFromSeverById((String)(volanteerId)).subscribe(data => {
        this.volunteer = data;
      })
    })
  }
 
  ngOnDestroy() {

  }

}
