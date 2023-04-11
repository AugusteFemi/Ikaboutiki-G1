import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panier1Component } from './panier1.component';

describe('Panier1Component', () => {
  let component: Panier1Component;
  let fixture: ComponentFixture<Panier1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panier1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panier1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
