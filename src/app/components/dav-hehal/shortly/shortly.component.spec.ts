import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlyComponent } from './shortly.component';

describe('ShortlyComponent', () => {
  let component: ShortlyComponent;
  let fixture: ComponentFixture<ShortlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
