import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanoidesComponent } from './humanoides.component';

describe('HumanoidesComponent', () => {
  let component: HumanoidesComponent;
  let fixture: ComponentFixture<HumanoidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanoidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
