/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockWatcherWizardComponent } from './stock-watcher-wizard.component';

describe('StockWatcherWizardComponent', () => {
  let component: StockWatcherWizardComponent;
  let fixture: ComponentFixture<StockWatcherWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockWatcherWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockWatcherWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
