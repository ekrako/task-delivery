import { ElementryClass } from './../../services/class.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { Assignment } from 'src/app/services/assignment.model';

@Component({
  selector: 'app-task-delivery',
  templateUrl: './task-delivery.component.html',
  styleUrls: ['./task-delivery.component.css'],
})
export class TaskDeliveryComponent implements OnInit {
  myControl = new FormControl();
  selectedClassId: string;
  options: string[] = [];

  filteredOptions: Observable<string[]>;
  assignments: Assignment[];
  selectedAssignment: Assignment;
  classes: ElementryClass[];
  selectClass: ElementryClass;
  studentName: string;
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.assignments = this.taskService.getAssigments();
    this.classes = this.taskService.getClasses();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  changeClass() {
    this.studentName = '';
    this.options = this.taskService.getStudentNames(this.selectedClassId);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  validForm() {
    return (
      this.selectedAssignment != null &&
      this.selectedClassId != null &&
      this.studentName != ''
    );
  }
  onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }
  onSubmit(form: NgForm) {}
}
