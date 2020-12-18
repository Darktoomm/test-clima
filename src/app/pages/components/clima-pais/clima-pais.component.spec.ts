import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaPaisComponent } from './clima-pais.component';

describe('ClimaPaisComponent', () => {
  let component: ClimaPaisComponent;
  let fixture: ComponentFixture<ClimaPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
