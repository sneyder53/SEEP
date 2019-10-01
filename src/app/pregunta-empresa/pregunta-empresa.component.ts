import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pregunta } from '../model/pregunta';
//import {NgForm} from '@angular/forms';
//import { FormBuilder } from '@angular/forms';
//import {FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pregunta-empresa',
  templateUrl: './pregunta-empresa.component.html',
  styleUrls: ['./pregunta-empresa.component.css']
})
export class PreguntaEmpresaComponent implements OnInit {

	public empresa = null;
	public preguntanex = 0;
	public respuestaCorrecta:string = 'B. Comercio' ;
	respuestas = [
    {valor:'A', muestraValor:'A. Servicios'},
    {valor:'B', muestraValor:'B. Comercio'},
    {valor:'C', muestraValor:'C. A y B'},
    {valor:'D', muestraValor:'D. Ninguna de las Anteriores'}
  ];

  constructor(//private formBuilder: FormBuilder,
  				private _route: ActivatedRoute)
  			{ 
  				/*this.checkoutForm = this.formBuilder.group({
		      		pregunta: '',
		      		respuesta: ''
		    	});*/
  			}

  ngOnInit() {
  	//this.pregunta = new Pregunta(1,'A que sector de la economía pertenece la empresa?',['A','B','C','D']);
  	this.setEmpresa()
  	console.log(this.respuestaCorrecta);
  }

  setEmpresa(){
  	this._route.params.subscribe(
        params =>{
        	this.empresa =  params["id"];
        });
  }

  siguientePregunta(){
  	this.preguntanex ++
  	/*this._route.params.subscribe(
        params =>{
        	this.respuestaCorrecta =  params["respuestaseleted"];
        });
        

    this.respuestaCorrecta += value;*/
  	console.log(this.respuestaCorrecta);
  	
  }


}
