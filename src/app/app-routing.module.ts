import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowComponent } from './flow/flow.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'lancamentos', 
    component: FlowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
