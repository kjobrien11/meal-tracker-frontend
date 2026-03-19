import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMealDetailsComponent } from './new-meal-details.component';

describe('NewMealDetailsComponent', () => {
  let component: NewMealDetailsComponent;
  let fixture: ComponentFixture<NewMealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMealDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
