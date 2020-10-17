import { Injectable } from '@angular/core';
import { Assignment } from './assignment.model';
import { ElementryClass } from './class.model';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private classes: ElementryClass[] = [
    { name: "כיתה ד'1", id: 'd1' },
    { name: "כיתה ד'2", id: 'd2' },
    // { name: "כיתה ד'3", id: 'd3' },
  ];

  private assignments: Assignment[] = [
    { name: 'משימה 1', id: 'task1' },
    { name: 'משימה 2', id: 'task2' },
    { name: 'משימה 3', id: 'task3' },
    { name: 'משימה 4', id: 'task4' },
  ];

  private names = {
    d1: ['ערן קרקובסקי', 'עומר קרקובסקי', 'לירן גזית'],
    d2: ['לאה שמיר', 'יובל גזית', 'ליאור גזית'],
  };

  constructor() {}

  getAssigments() {
    return this.assignments.slice();
  }

  getClasses() {
    return this.classes.slice();
  }
  getStudentNames(classId: string) {
    return this.names[classId].slice();
  }
}
