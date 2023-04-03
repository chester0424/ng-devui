import { Component, OnInit } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'd-form-design',
  templateUrl: './form-design.component.html',
})

export class FormDesignComponent implements OnInit {
  imgSrc;
  constructor() { }

  ngOnInit(): void {
    this.imgSrc = environment.deployPrefix + 'assets/no-data.png';
  }
}
