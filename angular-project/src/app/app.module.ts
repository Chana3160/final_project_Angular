import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduligComponent } from './scheduling-module/schedulig/schedulig.component';
import{ VolunteerModuleModule} from './volunteer-module/volunteer-module.module'
import { VolenteerListComponent } from './volunteer-module/volenteer-list/volenteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-module/volunteer-details/volunteer-details.component';
import { SchedulingModuleModule } from './scheduling-module/scheduling-module.module';

const APP_ROUTES: Route[] = [

  {path: "scheduling", component: ScheduligComponent },
  {path: "volenteer", component:VolenteerListComponent},
  {path: "volenDetails", component:VolunteerDetailsComponent },
  {path: "volenDetails/:v", component:VolunteerDetailsComponent }
]

@NgModule({
  declarations: [AppComponent, ],
  imports: [ BrowserModule,AppRoutingModule, VolunteerModuleModule,SchedulingModuleModule,RouterModule.forRoot(APP_ROUTES, {useHash:true}) ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
