import { Component, OnInit } from '@angular/core';
import { PotterServiceService } from 'src/app/services/potter-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private potterServices: PotterServiceService) {}

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.potterServices.getAllServices();
  }
}
