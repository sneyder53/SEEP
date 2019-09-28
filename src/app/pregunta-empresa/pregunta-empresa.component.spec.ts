import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaEmpresaComponent } from './pregunta-empresa.component';

describe('PreguntaEmpresaComponent', () => {
  let component: PreguntaEmpresaComponent;
  let fixture: ComponentFixture<PreguntaEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
