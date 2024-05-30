import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { detailsComponent } from './modules/details/details.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"detalles/:id",component:detailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
