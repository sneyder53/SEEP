import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacontDetalleComponent } from './seacont-detalle.component';

describe('SeacontDetalleComponent', () => {
  let component: SeacontDetalleComponent;
  let fixture: ComponentFixture<SeacontDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeacontDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacontDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
