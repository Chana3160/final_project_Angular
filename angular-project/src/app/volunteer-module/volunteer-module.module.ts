import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolenteerListComponent } from './volenteer-list/volenteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [VolenteerListComponent, VolunteerDetailsComponent],
  imports: [CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  exports: [ VolunteerDetailsComponent]
})
export class VolunteerModuleModule { }
