import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatruresComponent } from './featrures.component';

describe('FeatruresComponent', () => {
  let component: FeatruresComponent;
  let fixture: ComponentFixture<FeatruresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatruresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatruresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
