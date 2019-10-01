import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-seacont',
  templateUrl: './seacont.component.html',
  styleUrls: ['./seacont.component.css']
})
export class SeacontComponent implements OnInit {
	nombre = 'JUAN';
  constructor() { }

  ngOnInit() {
  }

}
