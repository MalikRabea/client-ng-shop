import { CoreService } from './core/core.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Models/Product';
import { IPagnation } from './shared/Models/Pagnation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private CoreService:CoreService) {}

  ngOnInit(): void {}
  title = 'client';
}

