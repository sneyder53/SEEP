import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pregunta } from '../model/pregunta';
//import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pregunta-empresa',
  templateUrl: './pregunta-empresa.component.html',
  styleUrls: ['./pregunta-empresa.component.css']
})
export class PreguntaEmpresaComponent implements OnInit {

	public empresa = null;
	public preguntanex = 0;
	//public respuesta : string;

	respuestas = [
    {valor:'A', muestraValor:'Sumar'},
    {valor:'B', muestraValor:'Restar'},
    {valor:'C', muestraValor:'Multiplicar'},
    {valor:'D', muestraValor:'Dividir'}
  ];

  constructor(
  				private _route: ActivatedRoute)
  			{ 
  				
  			}

  ngOnInit() {
  	//this.pregunta = new Pregunta(1,'A que sector de la economía pertenece la empresa?',['A','B','C','D']);
  	this.setEmpresa()
  }

  setEmpresa(){
  	this._route.params.subscribe(
        params =>{
        	this.empresa =  params["id"];
        });
  }

  siguientePregunta(){
  	this.preguntanex ++
  	//this.respuestas = value;
  }

}
