import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  currentParameterId;
  constructor(public  route:ActivatedRoute) {
    this.currentParameterId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
