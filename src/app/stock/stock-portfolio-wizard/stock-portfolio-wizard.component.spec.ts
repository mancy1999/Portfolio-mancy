/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockPortfolioWizardComponent } from './stock-portfolio-wizard.component';

describe('StockPortfolioWizardComponent', () => {
  let component: StockPortfolioWizardComponent;
  let fixture: ComponentFixture<StockPortfolioWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPortfolioWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPortfolioWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
