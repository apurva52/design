import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavHehalComponent } from './dav-hehal.component';

describe('DavHehalComponent', () => {
  let component: DavHehalComponent;
  let fixture: ComponentFixture<DavHehalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavHehalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavHehalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
