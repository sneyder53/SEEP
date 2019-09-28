import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacontComponent } from './seacont.component';

describe('SeacontComponent', () => {
  let component: SeacontComponent;
  let fixture: ComponentFixture<SeacontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeacontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeacontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
