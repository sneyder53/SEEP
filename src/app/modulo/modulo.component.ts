import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

	public empresa = null;

	constructor(private _route: ActivatedRoute) { }

	ngOnInit() {
		this.setEmpresa()
	}

	setEmpresa(){
  	this._route.params.subscribe(
        params =>{
        	this.empresa =  params["id"];
        });
  }

}
