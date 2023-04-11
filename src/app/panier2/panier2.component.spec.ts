import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panier2Component } from './panier2.component';

describe('Panier2Component', () => {
  let component: Panier2Component;
  let fixture: ComponentFixture<Panier2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panier2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panier2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
