import { Injectable } from '@angular/core';
import { Assignment } from './assignment.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private assignments: Assignment[] = [
    { name: 'משימה 1', id: 'task1' },
    { name: 'משימה 2', id: 'task2' },
    { name: 'משימה 3', id: 'task3' },
    { name: 'משימה 4', id: 'task4' },
  ];
  constructor() {}

  getAssigments() {
    return this.assignments.slice();
  }
}
