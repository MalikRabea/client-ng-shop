import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgParticlesModule } from 'ng-particles';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ← أضف هذا




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgParticlesModule,
    RouterModule,
    FormsModule  
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }