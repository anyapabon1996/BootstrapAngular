import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HechizosComponent } from './hechizos.component';

describe('HechizosComponent', () => {
  let component: HechizosComponent;
  let fixture: ComponentFixture<HechizosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HechizosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HechizosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
