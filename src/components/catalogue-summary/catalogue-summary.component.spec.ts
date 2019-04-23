import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSummaryComponent } from './catalogue-summary.component';

describe('CatalogueSummaryComponent', () => {
  let component: CatalogueSummaryComponent;
  let fixture: ComponentFixture<CatalogueSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
