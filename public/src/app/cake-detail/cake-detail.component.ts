import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  @Input() cakeToShow: any;
  constructor() { }
  ngOnInit() { }
}
