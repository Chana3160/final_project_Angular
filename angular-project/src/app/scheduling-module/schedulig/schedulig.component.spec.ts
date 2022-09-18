import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduligComponent } from './schedulig.component';

describe('ScheduligComponent', () => {
  let component: ScheduligComponent;
  let fixture: ComponentFixture<ScheduligComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduligComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduligComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
