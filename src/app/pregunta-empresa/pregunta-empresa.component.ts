import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pregunta-empresa',
  templateUrl: './pregunta-empresa.component.html',
  styleUrls: ['./pregunta-empresa.component.css']
})
export class PreguntaEmpresaComponent implements OnInit {

	public empresa = null;
	public pregunta = 0;

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

  siguientePregunta(){
  	this.pregunta ++
  }

}
