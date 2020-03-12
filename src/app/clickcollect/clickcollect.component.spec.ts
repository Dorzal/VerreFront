import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcollectComponent } from './clickcollect.component';

describe('ClickcollectComponent', () => {
  let component: ClickcollectComponent;
  let fixture: ComponentFixture<ClickcollectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickcollectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickcollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
