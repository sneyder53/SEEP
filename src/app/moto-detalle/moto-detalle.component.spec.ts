import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoDetalleComponent } from './moto-detalle.component';

describe('MotoDetalleComponent', () => {
  let component: MotoDetalleComponent;
  let fixture: ComponentFixture<MotoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
