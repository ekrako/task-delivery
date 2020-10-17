import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeliveryComponent } from './task-delivery.component';

describe('TaskDeliveryComponent', () => {
  let component: TaskDeliveryComponent;
  let fixture: ComponentFixture<TaskDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
