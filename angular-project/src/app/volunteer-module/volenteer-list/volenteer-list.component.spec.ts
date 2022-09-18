import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolenteerListComponent } from './volenteer-list.component';

describe('VolenteerListComponent', () => {
  let component: VolenteerListComponent;
  let fixture: ComponentFixture<VolenteerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolenteerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolenteerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
