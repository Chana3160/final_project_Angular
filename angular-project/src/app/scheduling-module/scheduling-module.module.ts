import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduligComponent } from './schedulig/schedulig.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ScheduligComponent],
  imports: [  CommonModule,FormsModule,ReactiveFormsModule],
  exports:[ScheduligComponent]
})
export class SchedulingModuleModule { }
