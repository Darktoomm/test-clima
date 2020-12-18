import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoClimaComponent } from './listado-clima.component';

describe('ListadoClimaComponent', () => {
  let component: ListadoClimaComponent;
  let fixture: ComponentFixture<ListadoClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
